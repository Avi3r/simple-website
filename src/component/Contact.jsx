import React from "react";
import { useState } from "react";

const Contact = () => {

  const [ data ,setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  })

  const inputEvent = (event) => {
    const { name , value} = event.target;

    setData((preVal)=> {
      return {
        ...preVal,
        [name] : value,
      }
    })
  }


  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile no is ${data.phone}, and email is ${data.email} and my message for you is ${data.msg}. `)
  };


  return (
    <>
      <div className=" my-5">
        <h1 className=" text-center">Contact us</h1>
      </div>

      <div className=" container contact_div">
        <div className=" row">
          <div className=" col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="enter your name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="mobile no"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>

              <div class="col-12">
                <button className="btn btn-btn-outline-primary " type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
