import { createSelector } from 'reselect';

const selectHeader = (state) => state.header;

export const selectMenuHidden = createSelector(
  [selectHeader],
  (header) => header.isMenuHidden
);
