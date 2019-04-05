import React, { Component } from 'react';
import './App.css';

class App extends Component {

    //set up data variable with state
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
        this.passData()
    }

    //grab db items and save to data array variable
    passData(){
        fetch('/tickets/listdata')
            .then(data => data.json())
            .then(returnedData => this.setState({data:returnedData}))
    }

    render() {
        //structure data for render
        const mapData = this.state.data.map((eachEl) => {
            return(
                <div key={eachEl._id}>
                    <p>Name: {eachEl.ticket_person_reporting}</p>
                    <p>Problem: {eachEl.ticket_problem_description}</p>
                    <p>Date: {eachEl.ticket_date}</p>
                    <hr/>
                </div>
            )
        });

    //render title and data
    return (
      <div className="App">
        <h1>Trouble Tickets</h1>
          {mapData}
      </div>
    );
  }
}

export default App;
