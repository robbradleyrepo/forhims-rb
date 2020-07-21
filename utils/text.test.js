import { shortenString, stripMarkdown } from "./text";

describe("Text Utils", () => {
  describe("Shorten String", () => {
    const limit = 100;
    it("Should shorten a string within the given character limit", () => {
      const exampleStr =
        "Hollywood ages gracefully for a reason, they use the best, prescription based products. Let’s examine the latest products.";
      const shortenedStr = shortenString({ string: exampleStr, limit });
      expect(shortenedStr).toEqual(
        "Hollywood ages gracefully for a reason, they use the best, prescription based products. Let’s …"
      );
    });
    it("Should return the entire string if less than the character limit", () => {
      const exampleStr = "This is a short string";
      const shortenedStr = shortenString({ string: exampleStr, limit });
      expect(shortenedStr).toEqual(exampleStr);
    });
    it("Should return an empty string if an invalid value is passed", () => {
      const exampleStr = null;
      const shortenedStr = shortenString({ string: exampleStr, limit });
      expect(shortenedStr).toEqual("");
    });
  });
  describe("Strip Markdown from String", () => {
    it("Should remove any additional markdown characters from a string", () => {
      const exampleMdStr =
        "# This is a heading\n\nThis is a paragraph with [a link](http://www.disney.com/) in it.";
      const plainTextStr = stripMarkdown(exampleMdStr);
      expect(plainTextStr).toEqual(
        "This is a heading\n\nThis is a paragraph with a link in it."
      );
    });
    it("Should not modify a string without markdown formatting", () => {
      const exampleStr = "This is a test.";
      const resultStr = stripMarkdown(exampleStr);
      expect(resultStr).toEqual(exampleStr);
    });
    it("Should return a sensible default if the string is missing", () => {
      const exampleStr = null;
      const resultStr = stripMarkdown(exampleStr);
      expect(resultStr).toBe("");
    });
  });
});
