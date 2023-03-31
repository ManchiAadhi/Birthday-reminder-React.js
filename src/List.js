import React from 'react'
import "./List.css"
export default function List(data) {
  let info = data.data
  return (
    <>
      {info.map((info) => {
return( 
        < div key={info.id}>
          <li id className="LI" >
            <div className="holder">
              <img src={info.image} alt={info.name} className="photo" />
              <div className="textholder">
                <h5>Name:{info.name} </h5>
                <p>Age:{info.age}</p>
                <p>birthday:{info.birthday}</p>
              </div>
            </div>
          </li>
        </div>)
      })}
        </>
  )

}
