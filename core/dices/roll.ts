import { v4 as uuidv4 } from "uuid";
import { strToDice } from "./strToDice";
import type { Dice, DiceResult, DiceStr } from "./type";

export function roll(diceDef: Dice): DiceResult;
export function roll(diceDef: DiceStr): DiceResult;

export function roll(diceDef: Dice | DiceStr): DiceResult {
  const dice = typeof diceDef === "string" ? strToDice(diceDef) : diceDef;
  const individualDice: number[] = [];

  let result = 0;
  for (let i = 0; i < dice.quantity; i++) {
    const newRoll = Math.max(1, Math.round(Math.random() * dice.nbSides));
    individualDice.push(newRoll);
    result += newRoll;
  }

  return {
    quantity: dice.quantity,
    nbSides: dice.nbSides,
    individualDice,
    result: result,
    uuid: uuidv4(),
  };
}
