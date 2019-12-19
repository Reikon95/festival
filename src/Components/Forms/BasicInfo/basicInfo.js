import React, { useState } from 'react';
import './basicInfo.css'

export default function EventDescription() {    
      
    let [submit, setSubmit] = useState('')
    function handleSubmit() {
        setSubmit('Splendid, thank you!')
    }
    function handleEventName(e) {
        localStorage.setItem("Event Name", e.target.value)
    }
    function handleStartDate(e) {
        localStorage.setItem("Start Date", e.target.value)
    }
    function handleEndDate(e) {
        localStorage.setItem("End date", e.target.value)
    }
    function handleLocation(e) {
        localStorage.setItem("Location", e.target.value)
    }
    function handleBlurb(e) {
        localStorage.setItem("Blurb", e.target.value)
    }
    console.log(localStorage)
    return( 
        <>
        <h1>Tell us some more about your event!</h1>
        <form id="eventDescriptionForm">
        <label>Festival name</label>
        <input type='text' placeholder="Enter the details of your event here. Explain what people can expect,
        and why they should be there" onChange={handleEventName}></input>
        <label>Start Date:</label><input type="date" onChange={handleStartDate}/>
        <label>End Date:</label><input type="date" onChange={handleEndDate}/>
        <label>Location: </label><input type="string" placeholder="Sofia, Bulgaria" onChange={handleLocation}/>
        <label>Enter a short blurb about your festival: </label>
        <textarea className="eventDescriptiontextarea" placeholder="Hogsozzle is a perfoming arts and music festival known for its hog rost" onChange={handleBlurb}></textarea>
        <div className="containerBasicInfo">
                <button onClick={handleSubmit} className="item">Save</button>
                <button onClick={handleSubmit} className="item">Preview</button>
                <button onClick={handleSubmit} className="item">Next</button>
            </div>
            {submit}
        </form>
        {/* <a href="/contactdetails"><button className="item" onClick={handleSubmit}>Continue</button></a><br></br> */}
        
        
        </>
    )
}