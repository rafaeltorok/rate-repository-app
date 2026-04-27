// Util
import formatDate from "../formatDate";

// Tests
describe("Testing the formatData function outputs", () => {
  it("A valid date returns a proper output", () => {
    const validDate = "2026-01-01T13:58:10.283Z";

    expect(formatDate(validDate)).toBe("01 Jan 2026");
  });

  it("A valid non-ISO format returns a proper output", () => {
    const validDate = "2026-02-01";

    expect(formatDate(validDate)).toBe("01 Feb 2026");
  });

  it("Invalid day of the month", () => {
    // Invalid day: February 30th
    const invalidDate = "2026-02-30T13:58:10.283Z";

    expect(() => formatDate(invalidDate)).toThrow();
  });

  it("Invalid date format", () => {
    const invalidDate = "20260101";

    expect(() => formatDate(invalidDate)).toThrow();
  });

  it("Invalid month number", () => {
    // Invalid number of days: February 30th
    const invalidDate = "20261301";

    expect(() => formatDate(invalidDate)).toThrow();
  });
});
