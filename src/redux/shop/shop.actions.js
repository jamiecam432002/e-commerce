import * as actionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => {
  return {
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
