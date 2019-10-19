//cart container
//TODO: implement GUI
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import axios from '../../shared/axiosInstanceWpress';
import Button from '../../components/UI/Button/Button';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import logger from '../../shared/logger/logger';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

import commonClasses from '../../App.css';

class Cart extends Component {

  state = {
    showModal: false
  };

  doCheckout = () => {    
    this.props.onCheckout({
      title: 'foo',
      body: 'bar',
      userId: 1
    });   
    this.setState({showModal: true}); 
  }

  modalClosed = () => {
    this.setState({showModal: false});
  }
  
  render() {
    logger.info('inside cart render');
    let response = null;
    if(this.props.loading){
      response = <Spinner />;
    }else{
      if(this.props.response){      
        response = <Modal show={this.state.showModal}
                      modalClosed={this.modalClosed}>{this.props.response.title}</Modal>;
      }
      if(this.props.error){      
        response = <Modal show={this.state.showModal}
                      modalClosed={this.modalClosed}>{this.props.error.getMessage()}</Modal>;
      }
    }       

    return (
      <div>        
        <Button btnType="Success" clicked={this.doCheckout}>Click To Checkout</Button>
        <span className={commonClasses.Highlight}>(Data will be posted to <em>https://jsonplaceholder.typicode.com</em> and response willbe displayed using Modal component.)</span>
        {response}        
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    response: state.order.response,
    loading: state.order.loading,
    error: state.order.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: (data) => dispatch(actions.checkout(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Cart, axios));