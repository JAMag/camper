import Card from "../ui/Card";
import classes from "./CamperItem.module.css";

function CamperItem(props) {
  return (
    <li>
      <Card>
        <div className="meta-info">
          <ul>
            <li>
              <strong>date: </strong>
              {props.date}
            </li>
            <li>
              <strong>time_submitted: </strong>
              {props.time_submitted}
            </li>
          </ul>
        </div>

        <h4 className={classes.camper_name}>{props.camper_name}</h4>

        <strong>Gender: </strong>
        {props.camper_gender}
        <br />
        <br />

        <strong>Has Sibling: </strong>
        {props.has_sibling}
        <br />
        <br />

        <strong>Returning customer: </strong>

        {props.has_returned}
        <br />
        <br />

        <strong>Image: </strong>
        {props.image}
        <br />
        <br />

        <div className={classes.delivery_status}>
          <h3 className={classes.camper_info}>Address</h3>
          <strong>Street: </strong>
          {props.street_address}
          <br />
          <br />
          <strong>city: </strong>
          {props.city}
          <br />
          <br />
          <strong>state: </strong>
          {props.state}
          <br />
          <br />
          <strong>zip: </strong>
          {props.zip}
          <br />
          <br />
          <p className={classes.delivery_instructions}>
            <strong>Delivery Instructions: </strong>
            {props.delivery_instructions}
          </p>
        </div>
        <br />

        <div>
          <strong>Cargo Type: </strong>
          {props.cargo_type}
          <br />
          <br />
          <strong>Service Type: </strong>
          {props.service_type}
          <br />
          <br />
          <strong>Attending Camp: </strong>
          {props.camp}
          <br />
          <br />
          <strong>Discount Code: </strong>
          {props.discount_code}
        </div>

        <br />
        <br />
        <button className="btn">Do It</button>
      </Card>
    </li>
  );
}

export default CamperItem;
