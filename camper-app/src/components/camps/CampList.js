import classes from "./CampList.module.css";
import CampItem from "./CampItem";

function CampList(props) {
  return (
    <ul className={classes.list}>
      {props.camps.map((camp) => (
        <CampItem
          key={camp.id}
          date_submitted={camp.submitted_date}
          time_submitted={camp.submitted_time}
          camp_start_date={camp.start_date}
          camp_end_date={camp.end_date}
          camp_gender={camp.camper_gender}
          camp_rate_one={camp.camp_rate_one}
          camp_rate_two={camp.camp_rate_two}
          camp_discount_code={camp.discount_code}
          discount_code_value={camp.discount_value}
          camp_commission_rate={camp.commission_percent}
          camp_contact_one={camp.contact_one}
          camp_contact_two={camp.contact_two}
          camp_phone_one={camp.phone_one}
          camp_phone_two={camp.phone_two}
          camp_email_one={camp.email_one}
          camp_email_two={camp.email_two}
          camp_street_address={camp.address}
          camp_city={camp.city}
          camp_state={camp.state}
          camp_zipcode={camp.zipcode}
          camp_cargotype={camp.cargotype}
          camp_service_type={camp.servicetype}
          camp_delivery_instructions={camp.delivery_instructions}
        />
      ))}
    </ul>
  );
}

export default CampList;
