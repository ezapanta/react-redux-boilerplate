import { MY_ACTION } from './actionTypes';

export function myAction(text) {
    return { type: MY_ACTION, text };
};