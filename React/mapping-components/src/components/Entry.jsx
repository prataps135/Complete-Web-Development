import React from "react";
import Details from "./Details";

function Entry(props) {
  return (
    <>
      <dl className="dictionary">
        <Details
          name={props.name}
          emoji={props.emoji}
          meaning={props.meaning}
        />
      </dl>
    </>
  );
}

export default Entry;
