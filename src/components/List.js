import React, { useEffect, useState, useMemo } from "react";
import "./List.css";
import { BASE_URL } from "./service/service";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function List() {
  const LIST_URL = BASE_URL + "api/list/date";
  const UPDATE_URL = BASE_URL + "api/list/update";
  const [taken,setTaken] = useState();
  const [details, setDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date(new Date().toLocaleDateString()));
  const naviagte = useNavigate();
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      date: startDate,
    },
  };
  const data = async () => {
    await axios.get(LIST_URL, config).then((res) => {setDetails(res.data); console.log(res.data)});
  };
  useEffect(() => {
    data();
  }, [startDate,taken]);
  function handleNavigate() {
    naviagte("/checkin");
  }
  const handleTaken = async (detail)=>{
      await axios.put(UPDATE_URL,null,{params:{id:detail.id,serve:!detail.serve}}).then((res)=>{
      });
      data();
    }

  return (
    <>
      <div className="head">
        <input
          type="date"
          style={{ width: "120px" }}
          className="input"
          onChange={(e) => {
            setStartDate(new Date(e.target.value));
          }}
          value={startDate}
        />
      </div>
      <div>
        <table id="customers">
            <th>Time</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Appointment</th>
            <th>Request</th>
          <tbody>
            {details.map((detail) => (
            (detail.serve === true)?(
              <tr id="body" className="grayout" key={detail.id}>
              <td onDoubleClick={()=>handleTaken(detail)}>
                {(detail.date).slice(11, 16)}  
              </td>
              <td onDoubleClick={()=>handleTaken(detail)} >{detail.name}</td>
              <td>{detail.phone}</td>
              <td>{detail.service}</td>
              {(detail.appt === "Walk in")?<td style={{color:"red"}}>{detail.appt}</td>:<td>{detail.appt}</td>}
              {(detail.request !== "")?<td style={{color:"#4287f5",fontWeight:"bold"}}>{detail.request}</td>:<td>{detail.request}</td>}
            </tr>
            ): (
              <tr id="body" key={detail.id}>
              <td onDoubleClick={()=>handleTaken(detail)}>
                {(detail.date).slice(11, 16)}
              </td>
              <td onDoubleClick={()=>handleTaken(detail)} >{detail.name}</td>
              <td>{detail.phone}</td>
              <td>{detail.service}</td>
              {(detail.appt === "Walk in")?<td style={{color:"red"}}>{detail.appt}</td>:<td>{detail.appt}</td>}
              {(detail.request !== "")?<td style={{color:"#4287f5",fontWeight:"bold"}}>{detail.request}</td>:<td>{detail.request}</td>}
            </tr>
            )
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
