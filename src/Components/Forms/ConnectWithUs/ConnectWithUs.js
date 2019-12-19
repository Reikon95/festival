import React from 'react';
import './ConnectWithUs.css';

export default class ContactPage extends React.Component {

    function socialMedia1Change(e) {
    localStorage.setItem('Social Media 1', e.target.value)
}
function socialMedia2Change(e) {
    localStorage.setItem('Social Media 2', e.target.value)
}
function socialMedia3Change(e) {
    localStorage.setItem('Social Media 3', e.target.value)
}
function emailChange(e) {
    localStorage.setItem('Email', e.target.value)
}
function addressChange(e) {
    localStorage.setItem('Address', e.target.value)
}

render() {
    return (
        <>
            <h1>Step 5 - Connect with us</h1>
            <form className='connectForm'>
                <p>Add social media links:</p>
                <textarea className='infoTextArea' type="text" id='connect' onChange={socialMedia1Change}></textarea>
                <textarea className='infoTextArea' type="text" id='connect' onChange={socialMedia2Change}></textarea>
                <textarea className='infoTextArea' type="text" id='connect' onChange={socialMedia3Change}></textarea>
                <p>Add contact email </p>
                <textarea className='infoTextArea' type="text" id='connect' onChange={emailChange}></textarea>
                <p>Add company address</p>
                <textarea className='infoTextArea' type="text" id='connect' onChange={addressChange}></textarea>
                <div className="containerEndButtons">
                    <button className="item">Save</button>
                    <button className="item">Preview</button>
                    <button className="item">Next</button>
                </div>
            </form>

        </>
    )
}
}


