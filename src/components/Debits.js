/*=================================================
src/components/Debits.js
The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class DebitsComponent extends Component {
  constructor () {
    super()
    this.state = {
      debit: {
          id: 'NEW',
          amount: 0,
          date: 'FILL ME',
          description: 'DESCRIPTION',
      },
    }
  }

  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {    
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    })
  }

  handleChange = (e) => {
    const updatedDebit = {...this.state.debit}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedDebit[inputField] = inputValue
    let rightNow = new Date()
    updatedDebit['date'] = rightNow.toISOString()
    this.setState({debit: updatedDebit})
  }
    
  handleSubmit  = (e) => {
    e.preventDefault();

    this.props.addDebit(this.state.debit);
  }

  render() {
    return (
      <div>
        <h1> Debits </h1>
        {this.debitsView()}
        <h1/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <h1/>

        <Link to="/userProfile">User Profile</Link>
        <h1></h1>
        <Link to="/LogIn">Log In</Link>
        <h1></h1>
        <Link to="/Credits">Credits</Link>
        <h1></h1>
        <Link to="/">Return to Home</Link>
        <h1></h1>

        <h1></h1>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor="description"> <b>Description:</b> </label>
              <input type="text" name="description" onChange={this.handleChange}/>
          </div>
          <div>
          <label htmlFor="amount"> <b>Amount:</b> </label>
              <input type="text" name="amount" onChange={this.handleChange}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default DebitsComponent;
