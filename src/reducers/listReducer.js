import { FETCH_LIST } from '../actions/types';

const initialState = {
  listT: [],
  listI: [],
  listO: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        listT: action.data.standings[0].table,
        listI: action.data.standings[1].table,
        listO: action.data.standings[2].table
      }
    default:
      return state;
  }
}