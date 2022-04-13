import classes from "./Card.module.css";
import { useState } from "react";

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={classes.card}>
      <div onClick={() => setExpanded(!expanded)}>
        <span className={classes.round}>+/-</span>
        {expanded && <div className="accodion">{props.children}</div>}
      </div>
    </div>
  );
}

export default Card;
