import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Body from "./layout/Body";
import Button from "./layout/Button";
import Head from "./layout/Head";

const axios = require("axios");

const App = () => {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
  const [image, setImage] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    async function loadQuote() {
      const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
      const { data } = await axios(url);
      setQuote(data[0].quote);
      setCharacter(data[0].character);
      setImage(data[0].image);
    }
    loadQuote();
  }, []);

  const clickHandler = () => {
    window.location.reload();
    setClick(true);
  };

  return (
    <>
      <Head />
      <div className="container">
        <div className="row">
          <div className="col">
            <Button clickHandler={clickHandler} />
          </div>
          <div className="col">
            <Body
              quote={quote}
              character={character}
              image={image}
              click={click}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
