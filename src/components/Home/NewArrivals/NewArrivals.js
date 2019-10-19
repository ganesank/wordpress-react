//New Arrivals
import React from 'react';

import classes from './NewArrivals.css';

const newArrivals = (props) => ( 
 <div className={["bg-white", classes.hmp20mq].join(' ')}>
    <header>
      <div>
        <div className={classes.b800}>
            <h2 className={classes.hmf11mq}>
                ADARSH FASION CATALOGUE
            </h2>
        </div>
        <address className={[classes.hmf11mq, classes.wrapWord,  classes.color78].join(' ')}>
            Goandevi wadi ,Ghansoli goan, 01, Ghansoli Gaon Main Rd, Gaondevi Wadi, Ghansoli Gaon, Ghansoli, Navi Mumbai, Maharashtra
        </address>
      </div>
    </header>
    <section className={[classes.pt20, classes.pb30].join(' ')}>
      <button className={classes.btnCatalogue}>
          View Full Catalogue
      </button>
    </section>
  </div>
);

export default newArrivals;