import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CheckIn.css";
import { BASE_URL } from "./service/service";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import manicure from "./image/manicure.png";
import pedicure from "../components/image/pedicure.png";
import facial from "../components/image/facial.png";
import calendar from "../components/image/calendar.png";
import walkin from "../components/image/walkin.png";
import { PatternFormat } from "react-number-format";
import Select from "react-select";
import trinh from "./image/trinh.png";
import thao from "./image/thao.png";
import minh from "./image/minh.png";
import chau from "./image/chau.png";
import ly from "./image/ly.png";
import tuyet from "./image/tuyet.png";

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "100%", // Ensures the dropdown control takes up the full width
    minWidth: window.innerWidth < 500 ? "350px" : "500px", // Adjusts width for mobile
    borderColor: "#569fd6", // Customize border color
    boxShadow: "none", // Remove default focus shadow
    "&:hover": {
      borderColor: "#569fd6", // Border color on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%", // Ensures the dropdown menu takes up the full width
    overflowX: "auto", // Allows horizontal scrolling if options overflow
  }),
  menuList: (provided) => ({
    ...provided,
    display: "grid", // Use grid layout
    gridTemplateColumns: "repeat(2, 1fr)", // 3 items per row
    gap: "1px", // Add spacing between items
    padding: "1px", // Add padding around the grid
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center-align content
    padding: "5px",
    backgroundColor: state.isFocused ? "#f0f8ff" : "white", // Highlight on hover
    color: "black",
    cursor: "pointer",
    border: "1px solid #ddd", // Optional: Add a border for better visibility
    borderRadius: "5px", // Optional: Add rounded corners
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const checkboxes = [
  { id: 1, label: "Pedicure", image: pedicure, value: "Pedi" },
  { id: 2, label: "Manicure", image: manicure, value: "Mani" },
  { id: 3, label: "Facial", image: facial, value: "Facial" },
];
const checkboxes2 = [
  { id: 1, label: "Appt", image: calendar, value: "Appt" },
  { id: 2, label: "Walkin", image: walkin, value: "Walk in" },
];
const employees = [
  { id: 0, name: "Anyone", image:""},
  { id: 1, name: "Trinh", image: trinh },
  { id: 2, name: "Ly", image: ly },
  { id: 439379, name: "Thao", image: thao },
  { id: 3, name: "Chau", image: chau },
  { id: 12, name: "Minh", image: minh },
  { id: 7, name: "Tuyet", image: tuyet },
  
];

const employeeOptions = employees.map((em) => ({
  value: em.id,
  label: (
    <div style={{ display: "flex", alignItems: "center" }}>
      {em.image && (
        <img
          src={em.image}
          alt={em.name}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            marginRight: "5px",
          }}
        />
      )}
      {em.name}
    </div>
  ),
}));

function CheckIn() {
  const SAVE_CHECKIN = BASE_URL + "api/checkin";
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [appt, setAppt] = useState([]);
  const navigate = useNavigate();
  const handleMenuChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedMenu([...selectedMenu, value]);
    } else {
      setSelectedMenu(selectedMenu.filter((item) => item !== value));
    }
  };
  const handleApptChange = (e) => {
    const value = e.target.value;
    setAppt([value]); // Replace the current selection with the new one
  };
  const [data, setData] = useState({
    name: "",
    phone: "",
    service: selectedMenu.toString(),
    appt: appt,
    request: employees[0].id,
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? selectedMenu.toString() : value,
    });
  };

  const handleEmployeeChange = (selectedOption) => {
    setData({ ...data, request: selectedOption.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const record = {
      name: data.name? data.name.toUpperCase():"",
      phone: data.phone,
      service: selectedMenu.toString(),
      appt: appt.toString(),
      request: data.request,
    };
    axios.post(SAVE_CHECKIN, record).then((res) => {
      alert("You have successfully check-in ❤️");
      handleClear();
    });
  };
  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);

  function handleClear() {
    setData({
      name: "",
      phone: "",
      service: setSelectedMenu([]),
      appt: setAppt([]),
      request: employees[0].id,
    });
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
  }

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="labels">
            <label id="name-label" style={{ color: "#569fd6" }}>
              Full Name
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>

          <div className="labels">
            <label id="name-label" style={{ color: "#569fd6" }}>
              Phone
            </label>
          </div>
          <div className="input-tab">
            <PatternFormat
              className="input-field"
              type="tel"
              inputMode="numeric"
              format="###-###-####"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Phone number"
              required
            />
          </div>
          <div className="middle">
            <div>
              <div className="checkboxes">
                {checkboxes.map((checkbox) => (
                  <div className="cat" key={checkbox.id}>
                    <label>
                      <input
                        name="service"
                        type="checkbox"
                        onChange={(e) => {
                          handleMenuChange(e);
                          handleChange(e);
                        }}
                        value={checkbox.value}
                      />
                      <span>
                        {checkbox.label}
                        <img src={checkbox.image}></img>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="checkboxes">
                {checkboxes2.map((checkbox) => (
                  <div className="cat" key={checkbox.id}>
                    <label>
                      <input
                        name="appt" // Use the same name for all radio buttons to group them
                        type="radio" // Change to radio for single selection
                        onChange={(e) => {
                          handleApptChange(e);
                        }}
                        value={checkbox.value}
                        checked={appt.includes(checkbox.value)} // Ensure the correct radio button is selected
                      />
                      <span>
                        {checkbox.label}
                        <img src={checkbox.image}></img>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="employee-selection">
                <label style={{ maxWidth: "280px", color: "#569fd6" }}>
                  If you wish to request specific technician, please select
                  their name:
                </label>
                <div className="dropdown">
                  <Select
                    options={employeeOptions}
                    onChange={handleEmployeeChange}
                    value={employeeOptions.find((option) => option.value === data.request)}
                    styles={customStyles} // Apply custom styles
                    isSearchable={false} // Disable search
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CheckIn;
