import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state[NAME];
};

export const getIsActiveCoupTab = createSelector(
    getModel,
    (model) => model.isSelectedCoupMx
);

export const getIsActiveAscentTab = createSelector(
    getModel,
    (model) => model.isSelectedAscent
);
