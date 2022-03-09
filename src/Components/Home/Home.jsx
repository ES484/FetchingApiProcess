import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Home() {
  const [allData, setAllData] = useState([]);
  useEffect(()=>{
    getAllData();
  },[]);
    async function getAllData()
    {
        let {data} = await axios.get('https://dev.dashmed.in/sample-data');
        setAllData(data.data);
        console.log(data.data);
    }
  return (
    <>
      {(allData.length)===5000?<div className='m-auto w-75 mt-5 text-white data'>
        <ul className="list-group">
          {allData.map((eachPartOfData, index)=>
            <li className="list-group-item list-group-item-info" key={index}
            data-bs-toggle="modal" data-bs-target="#boxOverContnet">
              <div className="ms-1">
                <h2 className="fw-bold">{eachPartOfData.medName}</h2>
                <h4 className='ms-3'>{eachPartOfData.saltName}</h4>
                <div className="modal fade" id="boxOverContnet" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>List item Clicked</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </li>
          )}
        </ul>
      </div>:
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>}
    </>
  )
}
