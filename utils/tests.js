import api from "../sagas/api";

// TODO: options for passing a function for response
export const setupRequestSpy = (spy, method) => {
  spy = jest.spyOn(api, method);
  spy.mockImplementation(() => {
    return Promise.resolve({
      response: {}
    });
  });
  return spy;
};
