import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1 style={{color:'green',fontFamily:'verdana'}}>Welcome to React</h1>
                       {/* <button className="button">Submit</button> */}
                       {/* <button className="btn btn-success">Submit</button> */}
                       <Button variant="success" >Submit</Button>
               </React.Fragment>)
       }
}
export default App;
