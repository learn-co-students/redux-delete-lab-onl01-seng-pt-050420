import uuid from "uuid";

export default function manageBand(state = { bands: [] }, action) {
  
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        name: action.payload,
        id: uuid()
      }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':

      const state = state.bands.filter(band => band.id !== action.payload)

      return { state };

    default:
      return state;
  }
};
