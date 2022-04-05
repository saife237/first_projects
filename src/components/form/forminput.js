import React, { Component } from 'react'

 class forminput extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         email:'',
      }
    }
    handleUserNameChange = (event) => {
this.setState({
    userName:event.target.value
})
    }
    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    submitChangeHandler = (event) => {
event.preventDefault()
    }
  render() {
      const {userName,email}=this.state
    return (
        <form onSubmit={this.submitChangeHandler}>
      <div>
              <label>UserName</label>
              <input type="text" value={userName} onChange={this.handleUserNameChange}/>
      </div>
      <div>
      <label>Email</label>
              <input type="email" value={email} onChange={this.handleEmailChange}/>
      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default forminput
