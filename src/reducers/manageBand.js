import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const band = {
        id: uuid(),
        name: action.name
      }

      console.log(band.id)
      return { ...state, bands: [...state.bands, band] };

      case 'REMOVE_BAND':
        console.log(action.id)

        const bands = state.bands.filter(band => band.id !== action.id)
        return { bands }
    default:
      return state;
  }
};
