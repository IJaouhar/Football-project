import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchList } from '../actions/listAction';
class List extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const team = this.props.listT.map(total => (
      <div key={total.id} className="row">
        <img className="img" src={total.team.crestUrl} />
        <p>{total.team.name}</p>
      </div>
    ));
    const total = this.props.listT.map(total => (
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

    const home = this.props.listI.map(home => (
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

    const out = this.props.listO.map(out => (
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

const mapStateToProps = state => ({
  listT: state.lists.listT,
  listI: state.lists.listI,
  listO: state.lists.listO
})

export default connect(mapStateToProps, { fetchList })(List)


