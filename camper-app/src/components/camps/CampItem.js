import Card from "../ui/Card";
import classes from "./CampItem.module.css";

function CampItem(props) {
  return (
    <li>
      <Card>
        <br />
        <div className={classes.submitted_info}>
          <strong> date_submitted: </strong>
          {props.date_submitted}
          <br />
          <strong>time_submitted: </strong>
          {props.time_submitted}
          <br />
          <strong>camp_start_date: </strong>
          {props.camp_start_date}
          <br />
          <strong> camp_end_date: </strong>
          {props.camp_end_date}
          <br />
          <strong>camp_gender: </strong>
          {props.camp_gender}
          <br />
          <strong>camp_rate_one: </strong>
          {props.camp_rate_one}
          <br />
          <strong>camp_rate_two: </strong>
          {props.camp_rate_two}
          <br />
          <strong>camp_discount_code: </strong>
          {props.camp_discount_code}
          <br />
          <strong>discount_code_value: </strong>
          {props.discount_code_value}
          <br />
          <strong> camp_commission_rate: </strong>
          {props.camp_commission_rate}
          <br />
          <strong>camp_contact_one: </strong>
          {props.camp_contact_one}
          <br />
          <strong>camp_contact_two: </strong>
          {props.camp_contact_two}
          <br />
          <strong>camp_phone_one: </strong>
          {props.camp_phone_one}
          <br />
          <strong>camp_phone_two: </strong>
          {props.camp_phone_two}
          <br />
          <strong>camp_email_one: </strong>
          {props.camp_email_one}
          <br />
          <strong>camp_email_two: </strong>
          {props.camp_email_two}
          <br />
          <strong>camp_street_address: </strong>
          {props.camp_street_address}
          <br />
          <strong>camp_city: </strong>
          {props.camp_city}
          <br />
          <strong>camp_state: </strong>
          {props.camp_state}
          <br />
          <strong>camp_zipcode: </strong>
          {props.camp_zipcode}
          <br />
          <strong>camp_cargotype: </strong>
          {props.camp_cargotype}
          <br />
          <strong>camp_service_type: </strong>
          {props.camp_service_type}
          <br />
          <strong>camp_delivery_instructions: </strong>
          {props.camp_delivery_instructions}
          <br />
          <br />
        </div>

        <div className={classes.message_text}>
          <button className="btn">Do It</button>
        </div>
      </Card>
    </li>
  );
}

export default CampItem;
