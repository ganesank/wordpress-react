//Home container
//TODO: remove temporary render() code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logger from '../../shared/logger/logger';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axiosInstanceWpress';
import NewArrivals from '../../components/Home/NewArrivals/NewArrivals';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';


import classes from './Home.css';
// import commonClasses from '../../App.css';
// import './Home.css';

class Home extends Component { 

  componentDidMount() { 
    this.props.onFetchHomeData();    
  }

  render() {  
    logger.info('inside home render');  
    //TODO: remove the dummy orders
    const orders = [{info: 'Order status / Payment Pednings'},{info: 'Test'}];
    const carouselSettings ={ dots: true,
                              infinite: true, 
                              speed: 500,
                              slidesToShow: 1,
                              slidesToScroll: 1
                            };

    return ( 
      <Aux>
        <section className={classes.mt15}>
          <NewArrivals />
        </section>
        <section>
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = state => {  
  return {    
    homePageData: state.home.homePageData,
    error: state.home.error,
    loading: state.home.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchHomeData: () => dispatch(actions.fetchHomeData()) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));