import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
        // console.log("Uppercase was clicked: "+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=() =>{
        // console.log("Uppercase was clicked: "+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const clearClick=() =>{
        // console.log("Uppercase was clicked: "+ text);
        let newText=('');
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange =(event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handlespace=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!","success");
    }
    const handleCopy =()=>{
      let text=document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","success");
    }
    const [text, setText]= useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',Color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-3" onClick={clearClick}>Clear Text</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-3" onClick={handlespace}>Clear space</button>
 </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{text.split(" ").length*0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
