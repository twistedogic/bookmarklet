import { getRandomInt } from "./util";

describe("getRandomInt", () => {
  it("should generate number between min and max", () => {
    const min = 0;
    const max = 10;
    const output = getRandomInt(min, max);
    expect(output).toBeGreaterThanOrEqual(min);
    expect(output).toBeLessThanOrEqual(max);
  });
});
