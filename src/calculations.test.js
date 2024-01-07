import { lengthToDays } from "./calculations";

describe("lengthToDays", () => {
  it("should return correct days for records in length table", () => {
    expect(lengthToDays(3)).toBe(43);
    expect(lengthToDays(4)).toBe(44);
    expect(lengthToDays(82)).toBe(98);
  });

  it("should return closest lower value for records not in length table for up to 5 mm", () => {
    expect(lengthToDays(78)).toBe(95);
    expect(lengthToDays(83)).toBe(98);
    expect(lengthToDays(84)).toBe(98);
    expect(lengthToDays(85)).toBe(98);
    expect(lengthToDays(86)).toBe(98);
    expect(lengthToDays(87)).toBe(98);
  });

  it("returns null for values not in length table for more than 5 mm", () => {
    expect(lengthToDays(88)).toBe(null);
    expect(lengthToDays(100)).toBe(null);
  });

  it("returns null for negative values", () => {
    expect(lengthToDays(-1)).toBe(null);
  });

  it("returns null for values lower than 3 mm", () => {
    expect(lengthToDays(2)).toBe(null);
  });
});
