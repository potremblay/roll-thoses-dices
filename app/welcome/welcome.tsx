import { useState } from "react";
import { roll } from "../../core/dices/roll";
import { DiceResult, DiceStr } from "../../core/dices/type";
import { DiceFactory } from "../../core/dices/factory";
import { DiceRollResult } from "../components/diceRollResult/diceRollResult";

export function Welcome() {
  const [diceRoll, setDiceRoll] = useState<DiceResult | null>(null);
  const [nbDice, setNbDice] = useState<number>(1);
  const [diceType, setDiceType] = useState<number>(20);
  const dicesTypeList: number[] = [4, 6, 8, 10, 12, 20];

  const valueToNumber = (v: string) => (v === "" ? 0 : Number(v));

  const nbDiceFocusHandler = () => {
    setNbDice(0);
  };

  const diceTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiceType(valueToNumber(e.target.value));
  };

  const nbDiceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNbDice(valueToNumber(e.target.value));
  };

  const rollThatDice = () => {
    const dice = DiceFactory(nbDice, diceType);
    setDiceRoll(roll(dice));
  };

  return (
    <main>
      <div className="text-center">
        <fieldset className="mb-5">
          <legend className="mb-2 font-serif leading-none text-3xl">
            Roll type
          </legend>

          <div className="flex grid grid-cols-3 gap-4">
            {dicesTypeList.map((dice) => (
              <div key={dice}>
                <input
                  type="radio"
                  name="diceType"
                  value={dice}
                  id={"diceType" + dice}
                  checked={diceType === dice}
                  onChange={diceTypeHandler}
                />
                <label htmlFor={"diceType" + dice}>d{dice}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="numberOfDices"
            className="mb-2 inline-block font-serif leading-none text-3xl"
          >
            Number of dices
          </label>
          <br />
          <input
            className="border-1 border-solid border-black text-center"
            name="nbDice"
            type="number"
            id="numberOfDices"
            inputMode="decimal"
            step="1"
            min={1}
            max={100}
            value={nbDice === 0 ? "" : nbDice}
            onFocus={nbDiceFocusHandler}
            onChange={nbDiceHandler}
          />
        </div>
        <button
          type="button"
          onClick={rollThatDice}
          className="
          mt-3
  bg-gradient-to-b from-yellow-300 to-yellow-600 
  text-gray-900 font-serif font-bold 
  border-4 border-yellow-800 
  rounded-xl px-6 py-2 
  shadow-md shadow-yellow-900 
  transition-all duration-300 
  hover:from-yellow-100 hover:to-yellow-400 
  hover:shadow-2xs hover:shadow-yellow-500 
  hover:scale-100
  active:scale-95
  focus:outline-none
  cursor-pointer
  font-serif
  leading-none
  text-3xl
"
        >
          Roll those dices!
        </button>
      </div>

      {diceRoll !== null && (
        <>
          <div className="mt-10">
            <hr className="w-[80%] mx-auto" />
            <div className="pt-2 mb-2 text-center">
              <span className="text-lg block">
                {diceRoll.quantity}d{diceRoll.nbSides}
              </span>
              <span className="">
                <span className="font-serif leading-none text-3xl">
                  Result:
                </span>
                <span className="text-xl"> {diceRoll?.result}</span>
              </span>
            </div>

            <ul className="flex flex-wrap gap-1 align-center justify-center">
              {diceRoll.individualDice.map((diceR, index) => (
                <li key={diceRoll.uuid + "-" + index + "-" + diceR}>
                  <DiceRollResult>{diceR}</DiceRollResult>
                </li>
              ))}
            </ul>

            <div></div>
          </div>
        </>
      )}
    </main>
  );
}
