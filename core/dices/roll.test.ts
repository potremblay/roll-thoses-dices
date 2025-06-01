import { roll } from "./roll";

describe("roll", () => {
  it("rolls numeric dice definition", () => {
    const result = roll({ quantity: 2, nbSides: 6 });

    expect(result.quantity).toBe(2);
    expect(result.nbSides).toBe(6);
  });

  it("rolls string dice definition", () => {
    const result = roll("4d12");

    expect(result.quantity).toBe(4);
    expect(result.nbSides).toBe(12);
  });

  it("should be evenly distributed", () => {
    const diceDef = { quantity: 1, nbSides: 6 };
    const rollTimes = 400_000;

    const expectedDistribution = rollTimes / diceDef.nbSides;
    const counts = Array(diceDef.nbSides).fill(0);

    for (let i = 0; i < rollTimes; i++) {
      const result = roll(diceDef).result;
      const index = result - 1;
      counts[index]++;
    }

    const tolerance = expectedDistribution * 0.01; // 1% tolerance

    for (let i = 0; i < diceDef.nbSides; i++) {
      expect(counts[i]).toBeGreaterThanOrEqual(
        expectedDistribution - tolerance
      );
      expect(counts[i]).toBeLessThanOrEqual(expectedDistribution + tolerance);
    }
  });
});
