import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myAction } from '../actions';

class MyComponentView extends Component {

    render(){
        return(<p>{this.props.value}</p>)
    }
};

const mapStateToProps = (state /*, ownProps */) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = { myAction }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponentView);