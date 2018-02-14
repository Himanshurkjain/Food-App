import type { Action } from "../actions/types";
import {GET_ALLERGIES} from "../actions/allergies";

export type State = {
    list: string
};

const initialState = {
    list: [
        "Milk",
        "Lime",
        "Nuts",
        "Kiwi",
        "Yogurt",
        "beans"
    ],
    selectedIndex: undefined
};

export default function(state: State = initialState, action: Action): State {
    if (action.type === GET_ALLERGIES) {
        return {
            ...state,
            selectedIndex: action.payload
        };
    }
    return state;
}
