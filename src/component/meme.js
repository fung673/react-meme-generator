import React from "react";
import memedata from '../memedata'
import { useState } from "react";


export default function Meme() {

 const [oldurl, newurl] = useState("")

 function getMemeImage() {
  const memesarray = memedata.data.memes
  const randomnumber = Math.floor(Math.random() * memesarray.length)
  const randomurl = memesarray[randomnumber].url
  newurl(randomurl)

 }

 return (<div className="interact">
  <div className="firstline"><input type="text" className="input1" value="Shut Up" />
   <input type="text" className="input2" value="Take My Money" /></div>
  <div class="break"></div>
  <button className="button" onClick={getMemeImage} >Get a new meme image  🖼️</button>
  <div class="break"></div>
  <img src={oldurl} className="meme--image" />
 </div>)

}