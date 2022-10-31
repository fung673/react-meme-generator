import React from "react";
import memedata from '../memedata'


export default function Meme(props) {

 let randomurl

 function getMemeImage() {
  const memesarray = memedata.data.memes
  const randomnumber = Math.floor(Math.random() * memesarray.length)
  const randomurl = memesarray[randomnumber].url
  console.log(randomurl)

 }

 return (<div className="interact">
  <div className="firstline"><input type="text" className="input1" value="Shut Up" />
   <input type="text" className="input2" value="Take My Money" /></div>
  <div class="break"></div>
  <button className="button" onClick={getMemeImage} >Get a new meme image  🖼️</button>
  <img src={randomurl} />
 </div>)

}