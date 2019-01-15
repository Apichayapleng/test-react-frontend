const { findMax } = require("./findMax");

describe("findMax", () => {
  it("return maximum between 2 values", () => {
    expect(findMax(1, 2)).toBe(2);
    expect(findMax(1, -2)).toBe(1);
  });

  it("returns same value of the 2 values if they are equal", () => {
    expect(findMax(0, 0)).toBe(0);
    expect(findMax(-0, 0)).toBe(0);
    expect(findMax(0, -0)).toBe(0);
  });

  // it("retuns maximum values between 3 values", () => {
  //   expect(findMax(1, 2, 3)).toBe(3);
  //   expect(findMax(2, 1, 3)).toBe(3);
  //   expect(findMax(3, 1, 2)).toBe(3);
  //   expect(findMax(1, 3, 2)).toBe(3);
  //   expect(findMax(2, 3, 1)).toBe(3);
  //   expect(findMax(3, 2, 1)).toBe(3);
  // });
});
