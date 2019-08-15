const ACTIONS = require("../action-types/bar-action-types");

const subtract = (number) => ({ type: ACTIONS.SUBTRACT, payload: number });
const multiply = (number) => ({ type: ACTIONS.MULTIPLY, payload: number });

module.exports = {
    subtract,
    multiply
}