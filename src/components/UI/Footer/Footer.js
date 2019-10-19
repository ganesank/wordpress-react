//footer
import React from 'react';



//import bsClasses from 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Footer.css';

const footer = () => (
  <footer className={classes.ContainerFooter}>
    <div className={[classes.FooterIcons,  
                      "bg-white",
                      classes.FooterHm, 
                      classes.SpaceAround].join(' ')}>    
      
    </div> 
  </footer>
);

export default footer;
