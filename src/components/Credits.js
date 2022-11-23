/*=================================================
src/components/Credits.js
The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class CreditsComponent extends Component {
  constructor () {
    super()
    this.state = {
      credit: {
          id: 'NEW',
          amount: 0,
          date: 'FILL ME',
          description: 'DESCRIPTION',
      },
    }
  }

  creditsView = () => {
    const { credits } = this.props;
    return credits.map((credit) => {    
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    })
  }

  handleChange = (e) => {
    const updatedCredit = {...this.state.credit}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedCredit[inputField] = inputValue
    let rightNow = new Date()
    updatedCredit['date'] = rightNow.toISOString()
    this.setState({credit: updatedCredit})
  }
  
  handleSubmit  = (e) => {
    e.preventDefault();

    this.props.addCredit(this.state.credit);
  }

  render() {

    return (
      <div>
        <h1> Credits </h1>
        {this.creditsView()}
        <h1/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="description"> <b>Description:</b> </label>
                <input type="text" class="block w-1/4 border red" name="description" onChange={this.handleChange}/>
            </div>
            <div>
            <label htmlFor="amount"><b>Amount:</b>  </label>
                <input type="text" name="amount" onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
        </form>
        <h1/>
        <Link to="/userProfile">User Profile</Link>
        <h1></h1>
        <Link to="/LogIn">Log In</Link>
        <h1></h1>
        <Link to="/Debits">Debits</Link>
        <h1></h1>
        <Link to="/">Return to Home</Link>
        <h1></h1>
      </div>

    );
  }
}

export default CreditsComponent;
