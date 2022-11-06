import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Meme() {

 const [meme, setMeme] = useState({
  topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"
 })
 const [allMemeImages, setAllMemeImages] = useState({})

 useEffect(
  function () {
   fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, []
 )

 console.log(allMemeImages)


 function getMemeImage() {
  const memesarray = allMemeImages
  const randomnumber = Math.floor(Math.random() * memesarray.length)
  const randomurl = memesarray[randomnumber].url
  setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomurl }))

 }

 function handleChange(event) {
  const { name, value } = event.target
  setMeme(prevMeme => ({
   ...prevMeme,
   [name]: value
  }))
 }

 return (<div className="interact">
  <div className="firstline"><input type="text" placeholder="Top text"
   className="form--input"
   name="topText"
   value={meme.topText}
   onChange={handleChange} />
   <input
    type="text"
    placeholder="Bottom text"
    className="form--input"
    name="bottomText"
    value={meme.bottomText}
    onChange={handleChange}
   /></div>
  <div class="break"></div>
  <button className="button" onClick={getMemeImage} >Get a new meme image  🖼️</button>
  <div class="break"></div>
  <div className="meme">
   <img src={meme.randomImage} className="meme--image" />
   <h2 className="meme--text top">{meme.topText}</h2>
   <h2 className="meme--text bottom">{meme.bottomText}</h2>
  </div>
 </div>
 )

}