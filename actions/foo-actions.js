const ACTIONS = require("../action-types/foo-actions-types");

const add = (number) => ({ type: ACTIONS.ADD, payload: number });
const increment = () => ({ type: ACTIONS.INCREMENT });
const decrement = () => ({ type: ACTIONS.DECREMENT });

module.exports = {
    add,
    increment,
    decrement
}