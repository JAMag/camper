import classes from "./CamperList.module.css";
import CamperItem from "./CamperItem";

function CamperList(props) {
  return (
    <ul className={classes.list}>
      {props.campers.map((camper) => (
        <CamperItem
          key={camper.id}
          date={camper.date}
          time_submitted={camper.time_submitted}
          camper_name={camper.camper_name}
          camper_gender={camper.camper_gender}
          has_sibling={camper.camper_sibling}
          has_returned={camper.returning_camper}
          camp={camper.camp_name}
          image={camper.camper_image}
          discount_code={camper.discount_code}
          street_address={camper.address}
          city={camper.city}
          state={camper.state}
          zip={camper.zipcode}
          cargo_type={camper.cargo_type}
          service_type={camper.service_type}
          delivery_instructions={camper.delivery_instructions}
        />
      ))}
    </ul>
  );
}

export default CamperList;
