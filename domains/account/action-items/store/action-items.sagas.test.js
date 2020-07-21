import actionItemsRootSaga from "./action-items.sagas";
import { expectSaga } from "redux-saga-test-plan";
import { ACTION_ITEMS_ACTIONS } from "./action-items.actions";
import actions from "../../../../actions";
import { select, take } from "../../../../node_modules/redux-saga/effects";
import { selectVisit } from "../../../checkout-flow/state/selectors/checkout";
import { UI } from "../../../checkout-flow/state/actions/ui.actions";
import { getOrders } from "../../../../selectors/order";
import { delay } from "redux-saga";

const SAGAS_EXPECTED_TIMEOUT = 20000;

describe("Profile Page", () => {
  describe("Required Action", () => {
    describe("Action Item Sagas", () => {
      beforeAll(() => {
        console.error = jest.fn();
        jest.setTimeout(SAGAS_EXPECTED_TIMEOUT);
      });

      afterEach(() => {
        console.error.mockReset();
      });

      afterAll(() => {
        jest.setTimeout(250);
      });

      it("Visit ID must match the last fetched visit that's flagged as active", async () => {
        const visitId = -1;
        const input = { visitId };

        await expectSaga(actionItemsRootSaga)
          .provide([
            [take(actions.emr.findVisitById.FULFILL), "FULFILL"],
            [select(selectVisit), { id: 999999 }]
          ])
          .not.put(UI.showEmr())
          .dispatch({
            type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
            payload: input
          })
          .silentRun();

        expect(console.error.mock.calls.length).toBe(1);
        expect(console.error.mock.calls[0][0]).toEqual(
          expect.stringContaining("Visit #")
        );
      });

      it("Visit ID must be related to one of the available orders", async () => {
        const visitId = -1;
        const orderId = -2;
        const input = { visitId };

        await expectSaga(actionItemsRootSaga)
          .provide([
            [take(actions.emr.findVisitById.FULFILL), "FULFILL"],
            [select(selectVisit), { id: visitId, orderId: orderId }],
            [select(getOrders), [{ id: 999990 }, { id: 999991 }]],
            [take(actions.order.fetchOrders.FULFILL), "FULFILL"]
          ])
          .not.put(UI.showEmr())
          .dispatch({
            type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
            payload: input
          })
          .silentRun();

        expect(console.error.mock.calls.length).toBe(1);
        expect(console.error.mock.calls[0][0]).toEqual(
          expect.stringContaining("Orders of visit #")
        );
      });

      it("Order fetch saga must not timeout.", async () => {
        const visitId = -1;
        const orderId = -2;
        const input = { visitId };

        const delayProvider = {
          call(effect, next) {
            if (effect.fn === delay) {
              return true;
            }

            return next();
          }
        };

        await expectSaga(actionItemsRootSaga)
          .provide([
            [take(actions.emr.findVisitById.FULFILL), "FULFILL"],
            [select(selectVisit), { id: visitId, orderId: orderId }],
            [select(getOrders), [{ id: 999990 }, { id: 999991 }]],
            delayProvider
          ])
          .not.put(UI.showEmr())
          .dispatch({
            type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
            payload: input
          })
          .silentRun();

        expect(console.error.mock.calls.length).toBe(1);
      });

      describe(`We can finally launch the EMR drawer once we obtain a valid 
      visit-order tuple.`, () => {
        const visitId = -1;
        const orderId = -2;
        const input = { visitId };

        it(`if we don't have the required order in redux store yet, we'll launch 
        a saga to fetch the most recent set of orders.`, async () => {
          const getOrdersProvider = (() => {
            let calls = 0;

            return {
              select({ selector }, next) {
                if (selector === getOrders) {
                  if (calls++ < 1) {
                    return [{ id: 999991 }];
                  } else {
                    return [{ id: orderId }, { id: 999991 }];
                  }
                }

                return next();
              }
            };
          })();

          const saga = expectSaga(actionItemsRootSaga)
            .provide([
              [take(actions.emr.findVisitById.FULFILL), "FULFILL"],
              [select(selectVisit), { id: visitId, orderId: orderId }],
              getOrdersProvider,
              [take(actions.order.fetchOrders.FULFILL), "FULFILL"]
            ])
            .put(UI.showEmr())
            .dispatch({
              type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
              payload: input
            })
            .silentRun();

          await saga;

          expect(console.error.mock.calls.length).toBe(0);
        });

        it(`if we already have the required order in redux store, we won't try 
        to fetch a new set of orders.`, async () => {
          await expectSaga(actionItemsRootSaga)
            .provide([
              [take(actions.emr.findVisitById.FULFILL), "FULFILL"],
              [select(selectVisit), { id: visitId, orderId: orderId }],
              [select(getOrders), [{ id: orderId }, { id: 999991 }]]
            ])
            .not.take(actions.order.fetchOrders.FULFILL)
            .put(UI.showEmr())
            .dispatch({
              type: ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
              payload: input
            })
            .silentRun();

          expect(console.error.mock.calls.length).toBe(0);
        });
      });
    });
  });
});
