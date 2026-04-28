// Util
import formatDate from "../formatDate";

// Tests
describe("Testing the formatDate function outputs", () => {
  describe("Valid inputs", () => {
      it("a valid date returns a proper output", () => {
      const validDate = "2026-01-01T13:58:10.283Z";

      expect(formatDate(validDate)).toBe("01 Jan 2026");
    });

    it("a valid non-ISO format returns a proper output", () => {
      const validDate = "2026-02-01";

      expect(formatDate(validDate)).toBe("01 Feb 2026");
    });
  });

  describe("Invalid input types", () => {
    it("empty input date", () => {
      const invalidDate = "";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("null input", () => {
      const invalidDate = null;

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("undefined input", () => {
      const invalidDate = undefined;

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("non-date format input", () => {
      const invalidDate = "today";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("numeric input", () => {
      const invalidDate = 20260101;

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("object input", () => {
      const invalidDate = {
        year: 2026,
        month: 1,
        day: 1
      };

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("array input", () => {
      const invalidDate = ["2026", "01", "01"];

      expect(() => formatDate(invalidDate)).toThrow();
    });
  });

  describe("Invalid date formats", () => {
    it("invalid day of the month", () => {
      // Invalid day: February 30th
      const invalidDate = "2026-02-30T13:58:10.283Z";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("invalid month number", () => {
      // Invalid number of days: February 30th
      const invalidDate = "20261301";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("YYYYMMDD format", () => {
      const invalidDate = "20260101";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("YYYY/MM/DD format", () => {
      const invalidDate = "2026/01/01";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("YYYY_MM_DD format", () => {
      const invalidDate = "2026_01_01";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("DDMMYYYY format", () => {
      const invalidDate = "01012026";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("YYYYDDMM format", () => {
      const invalidDate = "20260110";

      expect(() => formatDate(invalidDate)).toThrow();
    });

    it("incomplete ISO string", () => {
      expect(() => formatDate("2026-01")).toThrow();
    });

    it("valid date with extra characters", () => {
      expect(() => formatDate("2026-01-01Thursday")).toThrow();
    });

    it("invalid date that JS auto-corrects", () => {
      expect(() => formatDate("2026-02-30T00:00:00Z")).toThrow();
    });
  });
});
