//recentOrders
//TODO: remove the dummy data
import React from 'react';

import classes from './RecentOrders.css';
import Carousel from '../../UI/Carousel/Carousel';

const recentOrders = (props) => (
  <div className={classes.mt40}>
    <div className={[classes.w100percen, 
                classes.hmp20mq, classes.pr0, 
                classes.BgColorWhite, classes.pb35, 
                classes.pt35].join(' ')}>
      {/*<div className={["orderStatus", classes.m0, classes.p0, "col-12"].join(' ')}>
        {props.orders.map(order => (
          <div key={order.info} className={[classes.StatusContent,  classes.b600, classes.bdrrds5, classes.f40].join(' ')}>
              {order.info}
          </div>
        ))}
      </div>*/}
      <Carousel carouselSettings={props.carouselSettings}/>
    </div>
  </div>
);



export default recentOrders;