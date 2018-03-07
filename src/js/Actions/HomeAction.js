//demoaction
export const CHANGE_DEMO_ACTION = 'CHANGE_DEMO_ACTION';
//changSildbarState
export const CHANGE_SILDBAR_STATE = 'CHANGE_SILDBAR_STATE';

export function changeDemoAction(data) {
  return { type: CHANGE_DEMO_ACTION, data }
}

export function changSildbarState(sildBarState) {
  return { type: CHANGE_SILDBAR_STATE , sildBarState}
}