import { makepuzzle as generateNumbers } from "sudoku";
import { GameState } from "../Components/Core/Core";
import { returnListOfIdsAssociated } from "./HelperCoreService";

export function generateSudokuCellStates(): GameState[] {
  const unIncrementedValues: number[] = generateNumbers();

  let valueIndexZero: string;

  const gameState = unIncrementedValues.map((number: number, index: number) => {
    let value = number == null ? "" : `${number + 1}`;

    if (index == 0) {
      valueIndexZero = value;
    }

    return {
      value: value,
      id: index.toString(),
      isSelected: index == 0 ? true : false,
      isReadOnly: value ? true : false,
      isAssociated: index == 0 ? true : false,
      isMatchValue: returnIsMatchedNumber(value, valueIndexZero),
      isWrongValue: false,
      associatedIds: returnListOfIdsAssociated(index.toString()),
    };
  });

  return gameState;
}

export function returnIsMatchedNumber(
  value: string | string[],
  valueSelectedCell: string | string[] | undefined
): boolean {
  if (Array.isArray(value)) return false;

  if (value == valueSelectedCell && value) {
    return true;
  } else {
    return false;
  }
}
