import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state[NAME];
};

export const getIsOpen = createSelector(
    getModel,
    (model) => model.isOpen
);
