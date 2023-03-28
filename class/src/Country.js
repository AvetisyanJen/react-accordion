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
     {this.props.countrys.map((elm,id)=>{
          return <li onClick={()=>{this.setState({situation:!this.state.situation})}}
          key={id} className='list-group-item'>
            {elm.name}
           {this.state.situation ? <i className='fas fa-times close home-btn'></i>: <i className='fa fa-chevron-down'></i>}
           <br/>
           {this.state.situation && elm.capital}
          </li>
    
    
          
        })
    }
    <ul/>
    </>)
}
}export default Country

   