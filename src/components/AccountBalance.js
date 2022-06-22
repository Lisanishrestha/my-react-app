// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    return (
      <div>
        Balance: {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;