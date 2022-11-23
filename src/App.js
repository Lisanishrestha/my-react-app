/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from "axios"
import './App.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],       // debits array
      credits: []       // credits array
    } 
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
    this.componentDidMount()
  }
  
  // create new debit and add to array
  addDebit = (e) => {
    let newDebits = [...this.state.debits]

    let addMe = {
      'id': e.id,
      'amount': e.amount,
      'date': e.date,
      'description': e.description
    };

    newDebits.push(addMe);
    let addAmount = Number(this.state.accountBalance) - Number(e.amount);
    
    this.setState({debits: newDebits})
    this.setState({accountBalance: addAmount})
  }
  
  // create new credit and add to array
  addCredit = (e) => {
    let newCredits = [...this.state.credits]

    let addMe = {
      'id': e.id,
      'amount': e.amount,
      'date': e.date,
      'description': e.description
    };

    newCredits.push(addMe);
    
    let addAmount = Number(this.state.accountBalance) + Number(e.amount);

    this.setState({credits: newCredits})
    this.setState({accountBalance: addAmount})
  }

  // aynchronous component
  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    // get data from API response
    debits = debits.data
    credits = credits.data

    let debitSum = 0;
    let creditSum = 0;
    debits.forEach((debit) => { debitSum += debit.amount})
    credits.forEach((credit) => { creditSum += credit.amount})

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  }

  render() {

    const {debits} = this.state;
    const {credits} = this.state;

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  accountBalance={this.state.accountBalance}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance}/>)
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance}/>)

    return (
        <Router basename="/my-react-app">
          <div className="App">
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
