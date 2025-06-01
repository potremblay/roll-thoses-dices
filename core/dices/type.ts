export type Dice = {
  quantity: number;
  nbSides: number;
};

export type DiceResult = Dice & {
  individualDice: number[];
  result: number;
  uuid: string;
};

export type DiceStr = `${number}d${number}`;
