
import type { Action } from './types';

export const GET_ALLERGIES = 'GET_ALLERGIES';

export function getAllergies():Action {
    return {
        type: GET_ALLERGIES,
        payload: ""
    };
}
