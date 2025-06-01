import type { Dice } from "./type";

export function DiceFactory(quantity: number, nbSides: number): Dice {
  return {
    nbSides: nbSides,
    quantity: quantity,
  };
}
