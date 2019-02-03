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

export const getIsFetching = createSelector(
    getModel,
    (model) => model.isFetching
);

export const getData = createSelector(
    getModel,
    (model) => model.data
);

export const getDataCoupMX = createSelector(
    getData,
    (model) => {
        return model.coupMX ? model.coupMX : []
    }
);

export const getDataAscentMX = createSelector(
    getData,
    (model) => {
        return model.ascentMX ? model.ascentMX : []
    }
);