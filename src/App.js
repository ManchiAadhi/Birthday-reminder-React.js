import './App.css';
import { useState } from 'react';
import Data from "./Data.js"
import List from './List';
import React from 'react';
function App() {
const [data,setData] = useState(Data);
  function current(data) {
    let currentday = new Date().getDay();
    let currentmonth = new Date().getMonth();

    let filter = data.filter((data) => {
      let day = new Date(data.birthday).getDay();
      let month = new Date(data.birthday).getMonth();
      return (day === currentday && month === currentmonth)
    })

    return (filter);
  }

  function upcomming(input) {
    let currentday = new Date().getDay();
    let currentmonth = new Date().getMonth();

    let filter = data.filter((data) => {
      let day = new Date(data.birthday).getDay();
      let month = new Date(data.birthday).getMonth();
      if (month === currentmonth) {
        return (day > currentday)
      } else {
        return (month >currentmonth)
      }
    })
    return(filter);

  }
  return (
    <div id="maincontaier">
     
      <div id="childcontainer">
        <ul className="UI">
          <h1 id='today'> Today Birthday  </h1>
          <List data={current(data)} />
          <h1 id='upcoming'> Upcoming Birthday </h1>
         { (upcomming(data).length>=2)? <List data={upcomming(data).slice(0,5)} />:<List data={upcomming(data)} />}
        </ul>
      </div>
      <button  id='clear' onClick={()=>{setData([])}} > Clear All </button>
    </div>
  );
}

export default App;
