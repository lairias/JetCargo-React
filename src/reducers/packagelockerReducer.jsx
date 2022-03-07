import { types } from "../types/types";
const initialState = {
  loadingPackagesLocker: false,
};

export const packagelockerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllPackageLockerUser:
      return {
        ...state,
        ...action.payload,
        loadingPackagesLocker: true,
      };
    default:
      return state;
  }
};
