import React, { useState } from 'react';
import axios from "axios";
// import { PieceText } from "./entity.schemas";
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

function Form() {
  const [pieceText, setPieceText] = useState<string | null>(null)
  const [artistText, setArtistText] = useState<string | null>(null)

  async function onSubmit(event: any) {
    event.preventDefault();

    const newPiece = (await axios.post('/api/piece', { 
      piece: pieceText, 
      artist: artistText, 
    })).data;
  
  }

  return (
    <div>
        <form onSubmit={ (event) => onSubmit(event) }>
          <label htmlFor="pieceText">Enter text here:</label>
          <input onChange={ (event) => setPieceText(event.target.value)} name="pieceText" type="text"></input>

          <label htmlFor="artist">Enter artist here:</label>
          <input onChange={ (event) => setArtistText(event.target.value)}name="artist" type="text"></input>

          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
