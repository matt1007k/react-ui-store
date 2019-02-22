import React, { Component } from 'react'

import {Button} from 'reactstrap'

export class CheckOutPage extends Component {
  goHome = () => {
    this.props.history.push('/');
    //console.log(this.props.history.push(''));
  }
  render() {
    return (
      <div>
          Payment your pay
          <Button outline color="primary" onClick={this.goHome}>Return home</Button>  
      </div>
    )
  }
}

export default CheckOutPage
