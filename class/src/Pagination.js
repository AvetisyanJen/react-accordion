import { Component } from "react";

class Pagination extends Component{

 
   
render(){
    console.log(this.props.totalCountrys)
    const pageNumbers=[]
    for (let i = 1; i <= Math.ceil(this.props.totalCountrys/ this.props.limit); i++) {
        pageNumbers.push(i);
      }
      console.log(pageNumbers)
    return(<>

<nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
        <a onClick={() => this.props.paginate(number)}  className='page-link'>
              {number}
         </a>
          </li>
        ))}
      </ul>
    </nav>

    </>)
}
}export default Pagination