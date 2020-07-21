import {
  isWithinRxRange,
  selectAgeIsWithinRxRange,
  selectHasNewRxPermissions,
  selectHasRxAgeError,
  selectLineItems,
  selectRxProductConsultations
} from "./cart";
import {
  CHECKOUT_CONSULTATION_TITLES,
  CHECKOUT_MEDICAL_FEE_COST,
  CHECKOUT_MEDICAL_FEE_TITLE
} from "../../checkout-flow-content.constants";
import {
  RX_AGE_MIN,
  RX_AGE_MAX
} from "../../checkout-flow-validation.constants";

describe("cart selector test suite", () => {
  describe("selectLineItems test suite", () => {
    it("should select the lineItems from cart state when cart is not empty - there is no processing or shipping fee, omit entries with no value", () => {
      const order = null;
      const cart = {
        coupon: undefined,
        discount: 0,
        grandTotal: null,
        items: [
          {
            bundleId: null,
            bundleIds: null,
            contents: null,
            description: "1 mg x 90",
            id: "8VJm2WUc",
            isBundle: false,
            meta: null,
            prescriptions: ["HAIR_LOSS"],
            price: 4700,
            quantity: 1,
            requiresConsultation: true,
            requiresSubscription: true,
            sku: "*FH*Finasteride*90*1mg",
            status: "archived",
            tags: ["hair"],
            taxCode: null,
            title: "Finasteride 90 x 1 mg"
          }
        ],
        shipping: null,
        status: "pending",
        tax: null,
        total: null,
        userId: null
      };
      const subTotal = 4700;
      const hasRequiredConsultation = true;

      const expected = [{ label: "Order Sub-total*", value: "£47.00" }];

      expect(
        selectLineItems.resultFunc(
          order,
          cart,
          subTotal,
          hasRequiredConsultation
        )
      ).toEqual(expected);
    });

    it("should select the lineItems from cart state when cart is not empty - there is no processing or shipping fee, omit entries with no value, but there is a discount", () => {
      const order = null;
      const cart = {
        coupon: "gentsed",
        grandTotal: 3400,
        items: [
          {
            id: "DWraq9FV",
            title: "Sildenafil",
            description: "Sildenafil tablets 50mg x 8",
            price: 3300,
            sku: "*FH*Sildenafil*1*20mg",
            meta: null,
            isBundle: false,
            requiresSubscription: true,
            requiresConsultation: true,
            bundleId: null,
            tags: ["sex"],
            prescriptions: ["ED"],
            taxCode: "PH050102",
            bundleIds: null,
            contents: null,
            status: "active",
            quantity: 1
          }
        ],
        shipping: null,
        status: "pending",
        tax: null,
        total: null,
        userId: null,
        discount: 900,
        processingFee: 0,
        medicalFee: 1000
      };

      const subTotal = 0;
      const hasRequiredConsultation = true;

      const expected = [
        { label: "Medical Fee", value: "£10.00" },
        { isHighlighted: true, label: "Promo Discount", value: "-£9.00" },
        { isSeparated: true, label: "Grand Total", value: "£34.00" }
      ];

      expect(
        selectLineItems.resultFunc(
          order,
          cart,
          subTotal,
          hasRequiredConsultation
        )
      ).toEqual(expected);
    });

    it("should select the lineItems from order state when cart is empty and there is an order pending", () => {
      const order = {
        coupon: null,
        createdAt: "2019-01-14T20:27:23.939255+00:00",
        discount: 0,
        error: null,
        expressShipping: false,
        grandTotal: 5200,
        id: "Dl6xfxeM",
        items: [
          {
            createdAt: "2019-01-14T20:27:24.399107+00:00",
            id: "SQHRlKrf",
            meta: null,
            orderId: "Dl6xfxeM",
            productId: "8VJm2WUc",
            quantity: 1,
            subscription: 1
          }
        ],
        orderType: "new",
        shipping: 500,
        shippingAddressId: "il4a1HDd",
        status: "pending",
        subscriptionId: null,
        tax: null,
        total: 4700,
        trackingNumber: null,
        userId: "FtYlslyd",
        medical: 500
      };
      const cart = {
        coupon: undefined,
        grandTotal: null,
        discount: 0,
        items: [],
        shipping: null,
        status: "pending",
        tax: null,
        total: null,
        userId: null
      };
      const subTotal = 0;
      const hasRequiredConsultation = true;

      const expected = [
        { label: "Order Sub-total*", value: "£47.00" },
        { label: "Medical Fee", value: "£5.00" },
        { isSeparated: true, label: "Grand Total", value: "£52.00" }
      ];

      expect(
        selectLineItems.resultFunc(
          order,
          cart,
          subTotal,
          hasRequiredConsultation
        )
      ).toEqual(expected);
    });

    it("returns the right line items when there is an order with a discount", () => {
      const order = {
        coupon: "coupon code",
        createdAt: "2019-01-14T20:27:23.939255+00:00",
        discount: 900,
        error: null,
        expressShipping: false,
        grandTotal: 5200,
        id: "Dl6xfxeM",
        items: [
          {
            createdAt: "2019-01-14T20:27:24.399107+00:00",
            id: "SQHRlKrf",
            meta: null,
            orderId: "Dl6xfxeM",
            productId: "8VJm2WUc",
            quantity: 1,
            subscription: 1
          }
        ],
        orderType: "new",
        shipping: 500,
        shippingAddressId: "il4a1HDd",
        status: "pending",
        subscriptionId: null,
        tax: null,
        total: 4700,
        trackingNumber: null,
        userId: "FtYlslyd",
        medical: 500
      };
      const cart = {
        coupon: undefined,
        grandTotal: null,
        discount: 0,
        items: [],
        shipping: null,
        status: "pending",
        tax: null,
        total: null,
        userId: null
      };
      const subTotal = 0;
      const hasRequiredConsultation = true;

      const expected = [
        { label: "Order Sub-total*", value: "£56.00" },
        { label: "Medical Fee", value: "£5.00" },
        { isHighlighted: true, label: "Promo Discount", value: "-£9.00" },
        { isSeparated: true, label: "Grand Total", value: "£52.00" }
      ];

      expect(
        selectLineItems.resultFunc(
          order,
          cart,
          subTotal,
          hasRequiredConsultation
        )
      ).toEqual(expected);
    });
  });
  describe("Product Consultations", () => {
    it("Should select products from the store, and create new consultation items with generic names", () => {
      const products = [
        {
          bundleId: null,
          bundleIds: null,
          contents: null,
          description: "1 mg x 90",
          id: "8VJm2WUc",
          productId: "8VJm2WUc",
          isBundle: false,
          meta: null,
          prescriptions: ["HAIR_LOSS"],
          price: 4700,
          quantity: 1,
          requiresConsultation: true,
          requiresSubscription: true,
          sku: "*FH*Finasteride*90*1mg",
          status: "archived",
          tags: ["hair"],
          taxCode: null,
          title: "Finasteride 90 x 1 mg"
        }
      ];
      const consultations = [
        {
          id: "8VJm2WUc",
          productId: "8VJm2WUc",
          price: CHECKOUT_MEDICAL_FEE_COST,
          title: CHECKOUT_MEDICAL_FEE_TITLE,
          description: CHECKOUT_CONSULTATION_TITLES["8VJm2WUc"],
          showImage: false
        }
      ];
      expect(selectRxProductConsultations.resultFunc(products)).toEqual(
        consultations
      );
    });
    it("Should return an empty array if no products are found", () => {
      const products = undefined;
      expect(selectRxProductConsultations.resultFunc(products)).toEqual([]);
    });
  });

  describe("Prescription Age Range Validation", () => {
    describe("Prescription Age Range Selectors", () => {
      it("Should verify a patient's age is within range", () => {
        const state = {
          me: {
            dob: "1980-06-13"
          }
        };
        const isWithinRange = selectAgeIsWithinRxRange(state);
        expect(isWithinRange).toBeTruthy();
      });
      it("Should verify a patient's age is out of range", () => {
        const state = {
          me: {
            dob: "1920-06-13"
          }
        };
        const isWithinRange = selectAgeIsWithinRxRange(state);
        expect(isWithinRange).toBeFalsy();
      });
      it("Should verify a missing patient is not within range", () => {
        const state = {};
        const isWithinRange = selectAgeIsWithinRxRange(state);
        expect(isWithinRange).toBeFalsy();
      });
    });
    describe("Permission to add new Rx product selector", () => {
      it("Should verify that a patient of a valid age can add Rx products to cart", () => {
        const state = {
          me: {
            name: "Returning User",
            dob: "1980-06-13"
          }
        };
        const hasNewRxPermissions = selectHasNewRxPermissions(state);
        expect(hasNewRxPermissions).toBeTruthy();
      });

      it("Should verify that a user that has not saved a date of birth can add Rx products to cart", () => {
        const state = {
          me: {
            name: "New User"
          }
        };
        const hasNewRxPermissions = selectHasNewRxPermissions(state);
        expect(hasNewRxPermissions).toBeTruthy();
      });

      it("Should verify that a user that has not yet logged in can add Rx products to cart", () => {
        const state = {};
        const hasNewRxPermissions = selectHasNewRxPermissions(state);
        expect(hasNewRxPermissions).toBeTruthy();
      });
      it("Should verify that a patient of an invalid age can not add Rx products to cart", () => {
        const state = {
          me: {
            name: "Yung User",
            dob: "2009-06-13"
          }
        };
        const hasNewRxPermissions = selectHasNewRxPermissions(state);
        expect(hasNewRxPermissions).toBeFalsy();
      });
    });
    describe("Prescription Age Error Selector", () => {
      const mockRxProduct = {
        status: "active",
        id: "hZviGAgU",
        productId: "hZviGAgU",
        title: "Finasteride 90 x 1 mg",
        description: "1 mg x 90",
        price: 4700,
        sku: "*FH*Finasteride*90*1mg",
        meta: null,
        isBundle: false,
        requiresSubscription: true,
        requiresConsultation: true,
        bundleId: null,
        tags: ["hair"],
        prescriptions: ["HAIR_LOSS"],
        taxCode: null,
        bundleIds: null,
        contents: null
      };
      const mockRxState = {
        products: {
          byId: {
            hZviGAgU: mockRxProduct
          }
        },
        checkoutTemp: {
          cart: {
            items: [mockRxProduct]
          }
        }
      };

      const mockOtcProduct = {
        status: "active",
        id: "0OmsPq8k",
        title: "Immunity Gummy Vitamins - 1oz",
        description: "",
        price: 1900,
        sku: "FH*VIT*Immunity*1oz",
        meta: null,
        isBundle: false,
        requiresSubscription: false,
        requiresConsultation: false,
        bundleId: null,
        tags: [],
        prescriptions: null,
        taxCode: "PF050721",
        bundleIds: null,
        contents: null,
        blurb:
          "These are the vitamins that can help fight and ward off any incoming sickness.",
        url: "/vitamins/immune-system",
        cartThumbnail:
          "https://d33l6bpfmrj02a.cloudfront.net/assets_1_8_1/images/product-thumbs/Hims_ProductThumbs2018_Vitals_Immunity.png",
        imageSrc:
          "https://d33l6bpfmrj02a.cloudfront.net/assets_1_8_1/images/product-thumbs/Hims_ProductThumbs2018_Vitals_Immunity.png",
        hoverSrc:
          "https://d33l6bpfmrj02a.cloudfront.net/assets_1_8_1/images/product-thumbs/Hims_ProductThumbs2018_Vitals_Immunity_Hover.jpg",
        cartPayload: {
          quantity: 1,
          subscription: 0,
          productId: "0OmsPq8k"
        },
        note: "Item ships Oct 22."
      };

      const mockOtcState = {
        products: {
          byId: {
            "0OmsPq8k": mockOtcProduct
          }
        },
        checkoutTemp: {
          cart: {
            items: [mockOtcProduct]
          }
        }
      };

      it("Should display an error if the user's age is out of range, and Rx product is in the cart", () => {
        const state = {
          ...mockRxState,
          me: {
            dob: "2008-01-01"
          }
        };
        const hasError = selectHasRxAgeError(state);
        expect(hasError).toBeTruthy();
      });

      it("Should not display an error if the user's age is out of range, but no Rx product is in the cart", () => {
        const state = {
          ...mockOtcState,
          me: {
            dob: "2008-01-01"
          }
        };
        const hasError = selectHasRxAgeError(state);
        expect(hasError).toBeFalsy();
      });

      it("Should not display an error if the user's age is out of range, but no product is in the cart", () => {
        const state = {
          me: {
            dob: "2008-01-01"
          }
        };
        const hasError = selectHasRxAgeError(state);
        expect(hasError).toBeFalsy();
      });

      it("Should not display an error if the user's age is in range, and Rx product is in the cart", () => {
        const state = {
          ...mockRxState,
          me: {
            dob: "1985-01-01"
          }
        };
        const hasError = selectHasRxAgeError(state);
        expect(hasError).toBeFalsy();
      });

      it("Should not display an error if the user's age is in range, and no Rx product is in the cart", () => {
        const state = {
          ...mockOtcState,
          me: {
            dob: "1985-01-01"
          }
        };
        const hasError = selectHasRxAgeError(state);
        expect(hasError).toBeFalsy();
      });
    });
  });

  describe("Prescription Age Range Utils", () => {
    it("Should determine that a middle aged patient is within range", () => {
      const age = 35;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeTruthy();
    });
    it("Should determine that a patient on the high end is within range", () => {
      const age = RX_AGE_MAX;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeTruthy();
    });

    it("Should determine that an old patient is not within range", () => {
      const age = RX_AGE_MAX + 1;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeFalsy();
    });

    it("Should determine that a patient on the low end is within range", () => {
      const age = RX_AGE_MIN;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeTruthy();
    });
    it("Should determine that a young patient is not within range", () => {
      const age = RX_AGE_MIN - 1;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeFalsy();
    });

    it("Should determine that an unborn patient is not within range", () => {
      const age = 0;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeFalsy();
    });

    it("Should determine that a patient with an unknown age is not within range", () => {
      const age = undefined;
      const isWithinRange = isWithinRxRange(age);
      expect(isWithinRange).toBeFalsy();
    });
  });
});
