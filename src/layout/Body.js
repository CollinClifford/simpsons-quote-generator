import React from "react";
import "../layout/body.css"

const Body = ({ quote, image, character }) => {
  if (image) {
    return (
      <>
        <div className="partyPeople">
          <img
            className="img-fluid"
            src={image}
            alt="character"
          />
          <p>{quote}</p>
          <p>-{character}</p>
        </div>
      </>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Body;
