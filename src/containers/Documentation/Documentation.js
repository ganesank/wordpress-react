//Base App Framework Documentation
import React, {Component} from 'react';

class Documentation extends Component {
  render() {
    return(
      <div>
          <h2>ril-b2b-storefront-ui</h2>      
          <h3>DONE: Installed npm packages</h3>
          <ul>
            <li>Redux</li>
            <li>React-redux</li>
            <li>Redux-saga</li>
            <li>Axios</li>
            <li>React-Router</li>
            <li>React-router-dom</li>
          </ul>
          <h3>DONE: Added Common reusable UI components</h3>
          <ul>                    
            <li>Modal</li>          
            <li>Spinner</li>          
            <li>Backdrop</li>
          </ul>
          <h3>DONE: Added Higher Order Components(hoc)</h3>
          <ul>          
            <li>Layout</li>
            <li>withErrorHandler for error handling</li>          
            <li>Auxilary</li>
            <li>asyncComponent</li>
          </ul>
          <h3>DONE: Added Utilities</h3>
          <ul>
            <li>Axios instance setup for http call</li>
            <li>Common input validations</li>
            <li>Object converter utility</li>        
          </ul>
          <h3>DONE: Completed the SPA Workflow setup and base app modules.</h3>
          <ul>
            <li>Ejected default create-react-app configuration</li>
            <li>Enabled css modules to restrict css scope to individual component level</li>
            <li>Defined folder structure for assets, components and containers</li>
            <li>Cleaned up the boiler-plate code</li>
            <li>Redux dev tool setup for development mode done</li>  
            <li>React router setup</li>  
            <li>Handled different environment specific configuration - dev, test, prod etc.</li>                
            <li>Setup redux store and redux saga middleware</li>
            <li>Connected the redux store with containers</li>
            <li>Defined the respective actions, reducers, sagas</li>
            <li>added API configuration module.</li>   
            <li>sample api configuration usage in sagas</li>         
            <li>home container - implemented sample get action - fetched data to server</li> 
            <li>cart container - implemented sample post action on submit - posted data to server</li> 
            <li>Tested axios ajax calls</li>
            <li>implemented logger module to log to browser console and local storage.</li> 
            <li>implemented provision to add server side logging in logger module.</li> 
            <li>Environment specific logger configuration</li>
            <li>sample logger implementation in containers</li>
            <li>implemented exception base class and derived exception classes from it</li>
            <li>Global error handling</li>
            <li>Completed the app base framework</li> 
          </ul>
          <h3>TODO:</h3>
          <ul>
            <li>Update favicon.ico</li>                      
            <li>Implement GUI</li>
            <li>authentication - will implement this once the approach is discussed and finalized with Hybris team.</li>            
          </ul>       
        </div>
    );
    
  }
}

export default Documentation;

