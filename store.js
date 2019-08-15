const { createStore, combineReducers } = require('redux');
const FOOAT = require('./action-types/foo-actions-types');
const BARAT = require('./action-types/bar-action-types');
const FOOACTIONS = require('./actions/foo-actions');
const BARACTIONS = require('./actions/bar-actions');

// foo reducer
const foo = (state = 0, action) => {
    switch (action.type) {
        case FOOAT.INCREMENT:
            return state + 1;
        case FOOAT.DECREMENT:
            return state - 1;
        case FOOAT.ADD:
            return state + action.payload;
        default:
            return state;
    }
}

// bar reducer
const bar = (state = 1, action) => {
    switch (action.type) {
        case BARAT.SUBTRACT:
            return state - action.payload;
        case BARAT.MULTIPLY:
            return state * action.payload;
        default:
            return state;

    }
}

const mainReducers = combineReducers({ foo, bar });

const store = createStore(mainReducers);

store.subscribe(() => console.log(store.getState()))