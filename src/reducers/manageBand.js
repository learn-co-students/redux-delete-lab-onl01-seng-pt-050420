import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action.payload)
  switch (action.type) {
    
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      console.log(action)
      return {bands: state.bands.concat(band) }

      case 'DELETE_BAND':
        return { bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
