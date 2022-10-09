import React from "react";
import "./Cards.css"

const tourCard = (props)=>{
    const {title,desc,img} = props;
    return (
      <div className="card">
        <h2 className="city">{title}</h2>
        <img src={img} alt="" />
        <div className="par">
          <p className="show">{desc}</p>
        </div>
      </div>
    );
}

export default tourCard;

