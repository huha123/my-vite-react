import React from "react";
import { useEffect } from "react";

const CardList = (props) => {
  return (
    <div class="card">
      <div class="card-content">
        <h1>{props.data.word}</h1>
        <p>{props.data.diction}</p>
        {/* <p>{props.data.uid}</p> */}
        <h1>{props.data.count}</h1>
      </div>
      <div style={{margin: "10px"}}>
        <span
          onClick={(e) => props.countUp(e, props.data)}
          className={"button up"}
        >
          Up
        </span>
        <span
          onClick={(e) => props.countDown(e, props.data)}
          className={"button down"}
        >
          Down
        </span>
      </div>
    </div>
  );
};

export default CardList;
