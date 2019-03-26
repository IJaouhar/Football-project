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
  }

  render() {
    const team = this.state.listT.map(total => (
      <div key={total.id} className="row">
        <img className="img" src={total.team.crestUrl} />
        <p>{total.team.name}</p>
      </div>
    ));
    const total = this.state.listT.map(total => (
      <div key={total.id} className="row">
        <p>{total.points}</p>
        <p>{total.won}</p>
        <p>{total.draw}</p>
        <p>{total.lost}</p>
        <p>{total.goalsFor}</p>
        <p>{total.goalsAgainst}</p>
        <p>{total.goalDifference}</p>
      </div>
    ));

    const home = this.state.listI.map(home => (
      <div key={home.id} className="row">
        <p>{home.points}</p>
        <p>{home.won}</p>
        <p>{home.draw}</p>
        <p>{home.lost}</p>
        <p>{home.goalsFor}</p>
        <p>{home.goalsAgainst}</p>
        <p>{home.goalDifference}</p>
      </div>
    ));

    const out = this.state.listO.map(out => (
      <div key={out.id} className="row">
        <p>{out.points}</p>
        <p>{out.won}</p>
        <p>{out.draw}</p>
        <p>{out.lost}</p>
        <p>{out.goalsFor}</p>
        <p>{out.goalsAgainst}</p>
        <p>{out.goalDifference}</p>
      </div>
    ));
    
    return (
      <div className="container">
        <div>{team}</div>
        <div>{total}</div>
        <div>{home}</div>
        <div>{out}</div>
      </div>
    )
  }
}

export default List


