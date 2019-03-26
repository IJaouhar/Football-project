import React, { Component } from 'react'

class List extends Component {
  constructor(props){
super(props);
    this.state = {
      listT: [],
      listI: [],
      listO: []
    }
  }
  componentDidMount() {
    const miId = {
      headers: { 'X-Auth-Token': 'a4d6a8ff333a473da9758b0bd0cb9e1e' },
      dataType: 'json',
      type: 'GET',
    };

    fetch('https://api.football-data.org/v2/competitions/2014/standings', miId)
      .then(res => res.json())
      .then(data => this.setState({
        listT: data.standings[0].table,
        listI: data.standings[1].table,
        listO: data.standings[2].table
      }))
      .then(data => console.log(this.state.listT))
  }

  render() {
    const total = this.state.listT.map(total => (
      <div>
        <p>{total.team.name}</p>
        {/* <img src={total.team.crestUrl} /> */}
        <p>{total.points}</p>
        <p>{total.won}</p>
        <p>{total.draw}</p>
        <p>{total.lost}</p>
        <p>{total.goalsFor}</p>
        <p>{total.goalsAgainst}</p>
        <p>{total.goalDifference}</p>
      </div>
    ));
    
    return (
      <div className="container">
        {total}
      </div>
    )
  }
}

export default List


