import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
