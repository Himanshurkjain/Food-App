
import type { Action } from './types';


export const OPEN_DRAWER = 'OPEN_DRAWER';
export const OPEN_REST = 'OPEN_REST';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export function openDrawer():Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function openRest():Action {
    return {
        type: OPEN_DRAWER,
    };
}

export function closeDrawer():Action {
  return {
    type: CLOSE_DRAWER,
  };
}
