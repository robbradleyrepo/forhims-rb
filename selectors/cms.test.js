import { selectCmsPageWithSearchIndexingPreference } from "./cms";

describe("selectCmsPageWithSearchIndexingPreference", () => {
  it("does not override existing shouldPreventSearchEngineIndexing prop on page", () => {
    const page = { props: { shouldPreventSearchEngineIndexing: true } };

    expect(
      selectCmsPageWithSearchIndexingPreference.resultFunc(page, true, false)
    ).toBe(page);

    expect(page.props.shouldPreventSearchEngineIndexing).toEqual(true);

    expect(
      selectCmsPageWithSearchIndexingPreference.resultFunc(page, false, false)
    ).toBe(page);

    expect(
      selectCmsPageWithSearchIndexingPreference.resultFunc(page, false, true)
    ).toBe(page);

    expect(page.props.shouldPreventSearchEngineIndexing).toEqual(true);
  });

  it("sets shouldPreventSearchEngineIndexing to true if the current route matches a coupon route", () => {
    const page = {};
    const result = selectCmsPageWithSearchIndexingPreference.resultFunc(
      page,
      true,
      []
    );
    expect(result.props.shouldPreventSearchEngineIndexing).toEqual(true);
    expect(result).not.toBe(page);
  });

  it("sets shouldPreventSearchEngineIndexing to false if the current route does not match a coupon route or route in the blacklist", () => {
    const page = {};
    const result = selectCmsPageWithSearchIndexingPreference.resultFunc(
      page,
      false,
      false
    );
    expect(result.props.shouldPreventSearchEngineIndexing).toEqual(false);
    expect(result).not.toBe(page);
  });

  it("sets shouldPreventSearchEngineIndexing to true if the current route is in the blacklist", () => {
    const page = {};
    const result = selectCmsPageWithSearchIndexingPreference.resultFunc(
      page,
      false,
      true
    );
    expect(result.props.shouldPreventSearchEngineIndexing).toEqual(true);
    expect(result).not.toBe(page);
  });
});
