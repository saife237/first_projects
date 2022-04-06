import React, { Component } from 'react'


 class forminput extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        fname:'',
        lname:'',
         email:'',
         date:'',
      }
    }
    handleUserNameChange = (event) => {
this.setState({
  fname:event.target.value
})
    }
    handleLnameChange = (event) => {
      this.setState({
          lname:event.target.value
      })
  }

    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        })
    }

    handleDateChange = (event) => {
      this.setState ({
        date:event.target.value
      })
    }

    submitChangeHandler = (event) => {
      event.preventDefault();
      }
  render() {
      const {fname,email,lname,date,Message}=this.state
    return (
      <div className='conatiner'>
        <form onSubmit={this.submitChangeHandler}>
      <div>
              <label className='fname'>FirstName</label>
              <input className='input' type="text" value={fname} onChange={this.handleUserNameChange}/>
      </div>
      <div>
        <label className='lname'>LastName</label>
        <input className='input' type='text' value={lname} onChange={this.handleLnameChange}/>
      </div>
      <div>
        <label className='email'>Email</label>
        <input className='input' type='email' value={email} onChange={this.handleEmailChange}/>
      </div>
      <div>
        <label className='date'>Date Of Birth</label>
        <input className='input' type='date' value={date} onChange={this.handleDateChange}/>
      </div>
      <div>
        <label className='Message'>Message</label>
        <textarea className='input'/>
      </div>
      <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default forminput
