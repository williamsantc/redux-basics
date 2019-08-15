const { createStore, combineReducers } = require('redux');
const FOOAT = require('./action-types/foo-actions-types');
const BARAT = require('./action-types/bar-action-types');
const FOOACTIONS = require('./actions/foo-actions');
const BARACTIONS = require('./actions/bar-actions');

const fooReducer = (foo = 0, action) => {
    switch (action.type) {
        case FOOAT.INCREMENT:
            return foo + 1;
        case FOOAT.DECREMENT:
            return foo - 1;
        case FOOAT.ADD:
            return foo + action.payload;
        default:
            return foo;
    }
}

const barReducer = (bar = 1, action) => {
    switch (action.type) {
        case BARAT.SUBTRACT:
            return bar - action.payload;
        case BARAT.MULTIPLY:
            return bar * action.payload;
        default:
            return bar;

    }
}

const mainReducers = combineReducers({fooReducer, barReducer});

const store = createStore(mainReducers);

store.subscribe(() => console.log(store.getState()))