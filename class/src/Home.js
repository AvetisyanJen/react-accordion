import { Component } from "react";
import Country from "./Country";
import Pagination from "./Pagination";

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            countrys:[],
            loading:false,
            currentPage:1,
            limit:10,
            pages:[]
        }

    }
    
 
    componentDidMount() {
      this.setState({
        loading:true
      })
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(json => {
        console.log(json.data)
        this.setState({
          countrys: json.data
        })
       
        
      })
      
      this.setState({
        loading:false
      })
   
    
    
    }
    
    render(){
      const indexOfLastCountry = this.state.currentPage * this.state.limit;
      const indexOfFirstCountry = indexOfLastCountry- this.state.limit;
      const currentCountry = this.state.countrys.slice(indexOfFirstCountry, indexOfLastCountry);

      const paginate = pageNumber => this.setState({currentPage:pageNumber});
      const nextPage=()=>this.setState(prev=>{
        prev.currentPage+=1
        return prev})
        const prevPage=()=>this.setState(next=>{
          next.currentPage-=1
          return next})
        return(<>
        <div className='container mt-3'>
        {currentCountry.map((value, index)=>{
          return(
       <Country key ={index} name={value.name} capital={value.capital} loading={this.state.loading}/>
          )
        })}
       <Pagination   limit={this.state.limit}
        totalCountrys={this.state.countrys.length}
        paginate={paginate}/>
        <button className="btn btn-primary" onClick={prevPage}>Prev Page</button>
        <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
        </div>
        </>)
    }

}export default Home
