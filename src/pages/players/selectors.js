import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state[NAME];
};

export const getIsFetching = createSelector(
    getModel,
    (model) => model.isFetching
);

export const getData = createSelector(
    getModel,
    (model) => model.data
);