import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link }               from 'react-router';

class About extends Component {
  render () {
    return (
      <div>
        <h1>About</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
