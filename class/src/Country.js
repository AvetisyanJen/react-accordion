import { Component } from "react";

class Country extends Component{
constructor(props){
    super(props)
this.state={ situation:false}


}

render(){
    if(this.props.loading){
        return<h1>Loading...</h1>
    }
    return(<>
    <ul className='list-group mb-4'></ul>
    
         <li onClick={()=>{this.setState({situation:!this.state.situation})}}
        className='list-group-item'>
            {this.props.name}
           {this.state.situation ? <i className='fas fa-times close home-btn'></i>: <i className='fa fa-chevron-down'></i>}
           <br/>
           {this.state.situation && this.props.capital}
          </li>
    
    
          
        
    
    <ul/>
    </>)
}
}export default Country

   