import { useState } from "react"


function Country ({loading,countrys}){
    const [situation,setSituation]=useState(false)

    if (loading) {
        return <h2>Loading...</h2>;
      }
    console.log(countrys)
    return(<>
   
    <ul className='list-group mb-4'></ul>
     {countrys.map((elm,id)=>{
          return <li onClick={(id)=>{setSituation(!situation)}}
          key={id} className='list-group-item'>
            {elm.name}
           {situation ? <i className='fas fa-times close home-btn'></i>: <i className='fa fa-chevron-down'></i>}
           <br/>
           {situation && elm.capital}
          </li>
        })
}
    <ul/>
    </>)

}export default Country