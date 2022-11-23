/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    return (
      <div>
        <b>Balance:</b> {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;