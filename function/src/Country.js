import { useState } from "react"


function Country ({loading,name,capital}){
    const [situation,setSituation]=useState(false)

    if (loading) {
        return <h2>Loading...</h2>;
      }
   
    return(<>
   
    <ul className='list-group mb-4'></ul>
   
           <li onClick={(id)=>{setSituation(!situation)}}
         className='list-group-item'>
            {name}
           {situation ? <i className='fas fa-times close home-btn'></i>: <i className='fa fa-chevron-down'></i>}
           <br/>
           {situation && capital}
          </li>
     

    <ul/>
    </>)

}export default Country