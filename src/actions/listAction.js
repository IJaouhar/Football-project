import { FETCH_LIST } from './types';

export const fetchList  = () => dispatch => {
  const miId = {
    headers: { 'X-Auth-Token': 'a4d6a8ff333a473da9758b0bd0cb9e1e' },
    dataType: 'json',
    type: 'GET',
  };
  fetch('https://api.football-data.org/v2/competitions/2014/standings', miId)
    .then(res => res.json())
    .then(data => 
      dispatch({
        type: FETCH_LIST,
        data: data,
    })
  );
}