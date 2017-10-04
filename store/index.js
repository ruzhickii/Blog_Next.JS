import {createStore} from 'redux';

export const reducer = (state = {tick: 'init', tack: 'init'}, action) => {
    switch (action.type) {
    case 'TICK':
        return {...state, tick: action.payload};
    case 'TACK':
        return {...state, tack: action.payload};
    case 'CUSTOM':
        return {...state, val: action.val};
    default:
        return state;
    }
};

export const action = (val) => {
    return {
        type: 'CUSTOM',
        val
    };
};

export const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};
