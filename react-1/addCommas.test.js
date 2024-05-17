const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it returns a string", () => {
    expect(typeof addCommas(1000)).toBe("string");
  });

  test("it returns the number with commas", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000000)).toBe("1,000,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
    expect(addCommas(6)).toBe("6");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-5678)).toBe("-5,678");
    expect(addCommas(12345.6789)).toBe("12,345.6789");
    expect(addCommas(-123987.456)).toBe("-123,987.456");
  });
});
