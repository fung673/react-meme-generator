import React from "react";
import memedata from '../memedata'
import { useState } from "react";


export default function Meme() {

 const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg" })
 const [allMemeImages, setAllMemeImages] = useState(memedata)

 function getMemeImage() {
  const memesarray = allMemeImages.data.memes
  const randomnumber = Math.floor(Math.random() * memesarray.length)
  const randomurl = memesarray[randomnumber].url
  setMeme(prevMeme => ({ ...prevMeme, randomImage: randomurl }))

 }

 return (<div className="interact">
  <div className="firstline"><input type="text" className="input1" value="Shut Up" />
   <input type="text" className="input2" value="Take My Money" /></div>
  <div class="break"></div>
  <button className="button" onClick={getMemeImage} >Get a new meme image  🖼️</button>
  <div class="break"></div>
  <img src={meme.randomImage} className="meme--image" />
 </div>)

}