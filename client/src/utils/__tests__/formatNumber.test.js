// Util
import formatNumber from "../formatNumber";

// Tests
describe("Testing the formatNumber function outputs", () => {
  describe("Valid numeric values", () => {
    it("a valid number should return it as a string", () => {
      const number = 100;

      expect(formatNumber(number)).toBe("100");
    });

    it("number in the thousands should have the k suffix", () => {
      const number = 50000;

      expect(formatNumber(number)).toBe("50.0k");
    });

    it("number in the millions should have the m suffix", () => {
      const number = 5000000;

      expect(formatNumber(number)).toBe("5.0m");
    });

    it("0 is a valid numeric input", () => {
      const number = 0;

      expect(formatNumber(number)).toBe("0");
    });
  });

  describe("Invalid non-numeric values", () => {
    it("a string should throw an error", () => {
      const number = "number";

      expect(() => formatNumber(number)).toThrow();
    });

    it("a negative number should throw an error", () => {
      const number = -1;

      expect(() => formatNumber(number)).toThrow();
    });

    it("null should throw an error", () => {
      const number = null;

      expect(() => formatNumber(number)).toThrow();
    });

    it("undefined should throw an error", () => {
      const number = undefined;

      expect(() => formatNumber(number)).toThrow();
    });

    it("NaN should throw an error", () => {
      const number = NaN;

      expect(() => formatNumber(number)).toThrow();
    });

    it("infinity should throw an error", () => {
      const number = Infinity;

      expect(() => formatNumber(number)).toThrow();
    });

    it("a numeric string should not be converted and should throw an error", () => {
      const number = "10";

      expect(() => formatNumber(number)).toThrow();
    });
  });
});