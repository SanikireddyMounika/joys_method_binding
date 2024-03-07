import React from 'react'

export class App extends React.Component {
  constructor(){
    super()
    this.state={count:0,text:'',mobile:"",password:"",}
    this.mobilehandler=this.mobilehandler.bind(this)
    

  }
  texthandler(e){
    this.setState({text:e.target.value})
  }
  mobilehandler=(e)=>{
    this.setState({mobile:e.target.value})
  }
  passwordhandler=(e)=>{
    this.setState({password:e.target.value})
  }
  
  
  dechandler=()=>{
    this.setState((prev)=>({count:prev.count-1}))
  }
  inchandler(){
    this.setState((prev)=>({
      count:prev.count+1
    }))
  }
  render() {

    return (
      <div>
        {/* functionway */}
        <input type='text' placeholder="enter the name" onChange={this.texthandler.bind(this)} ></input>
        <h1>{!this.state.text?"username":this.state.text}</h1>
        {/* binding inside the constructor way */}
        <input type ="text" placeholder=" enter Mobile number" onChange={this.mobilehandler}></input>
        <h1>{!this.state.mobile?"mobile":this.state.mobile}</h1>
        {/* arrow way */}
        <input type="password" placeholder='enter the pasword' onChange={this.passwordhandler}></input>
        <h1>{!this.state.password?"password":this.state.password}</h1>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.inchanlder.bind(this)}>Inc</button> */}
        <button onClick={this.dechandler}>DEC</button>
        <button onClick={this.inchandler.bind(this)}>DEC</button>
       
      </div>
    )
  }
}

export default App
