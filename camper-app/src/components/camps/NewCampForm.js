import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewCampForm.module.css";

function NewCampForm(props) {
  const submitted_dateInputRef = useRef();
  const submitted_timeInputRef = useRef();
  const start_dateInputRef = useRef();
  const end_dateInputRef = useRef();
  const camper_genderInputRef = useRef();
  const camp_rate_oneInputRef = useRef();
  const camp_rate_twoInputRef = useRef();
  const discount_codeInputRef = useRef();
  const discount_valueInputRef = useRef();
  const commission_percentInputRef = useRef();
  const contact_oneInputRef = useRef();
  const contact_twoInputRef = useRef();
  const phone_oneInputRef = useRef();
  const phone_twoInputRef = useRef();
  const email_oneInputRef = useRef();
  const email_twoInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const zipcodeInputRef = useRef();
  const cargotypeInputRef = useRef();
  const servicetypeInputRef = useRef();
  const delivery_instructionsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredsubmitted_dateInputRef = submitted_dateInputRef.current.value;
    const enteredsubmitted_timeInputRef = submitted_timeInputRef.current.value;
    const enteredstart_dateInputRef = start_dateInputRef.current.value;
    const enteredend_dateInputRef = end_dateInputRef.current.value;
    const enteredcamper_genderInputRef = camper_genderInputRef.current.value;
    const enteredcamp_rate_oneInputRef = camp_rate_oneInputRef.current.value;
    const enteredcamp_rate_twoInputRef = camp_rate_twoInputRef.current.value;
    const entereddiscount_codeInputRef = discount_codeInputRef.current.value;
    const entereddiscount_valueInputRef = discount_valueInputRef.current.value;
    const enteredcommission_percentInputRef =
      commission_percentInputRef.current.value;
    const enteredcontact_oneInputRef = contact_oneInputRef.current.value;
    const enteredcontact_twoInputRef = contact_twoInputRef.current.value;
    const enteredphone_oneInputRef = phone_oneInputRef.current.value;
    const enteredphone_twoInputRef = phone_twoInputRef.current.value;
    const enteredemail_oneInputRef = email_oneInputRef.current.value;
    const enteredemail_twoInputRef = email_twoInputRef.current.value;
    const enteredaddressInputRef = addressInputRef.current.value;
    const enteredcityInputRef = cityInputRef.current.value;
    const enteredstateInputRef = stateInputRef.current.value;
    const enteredzipcodeInputRef = zipcodeInputRef.current.value;
    const enteredcargotypeInputRef = cargotypeInputRef.current.value;
    const enteredservicetypeInputRef = servicetypeInputRef.current.value;
    const entereddelivery_instructionsInputRef =
      delivery_instructionsInputRef.current.value;

    const campData = {
      submitted_date: enteredsubmitted_dateInputRef,
      submitted_time: enteredsubmitted_timeInputRef,
      start_date: enteredstart_dateInputRef,
      end_date: enteredend_dateInputRef,
      camper_gender: enteredcamper_genderInputRef,
      camp_rate_one: enteredcamp_rate_oneInputRef,
      camp_rate_two: enteredcamp_rate_twoInputRef,
      discount_code: entereddiscount_codeInputRef,
      discount_value: entereddiscount_valueInputRef,
      commission_percent: enteredcommission_percentInputRef,
      contact_one: enteredcontact_oneInputRef,
      contact_two: enteredcontact_twoInputRef,
      phone_one: enteredphone_oneInputRef,
      phone_two: enteredphone_twoInputRef,
      email_one: enteredemail_oneInputRef,
      email_two: enteredemail_twoInputRef,
      address: enteredaddressInputRef,
      city: enteredcityInputRef,
      state: enteredstateInputRef,
      zipcode: enteredzipcodeInputRef,
      cargotype: enteredcargotypeInputRef,
      servicetype: enteredservicetypeInputRef,
      delivery_instructions: entereddelivery_instructionsInputRef,
    };

    console.log(campData);

    props.onAddCamp(campData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label html_for="submitted_date">Date</label>
          <input
            type="date"
            required
            id="submitted_date"
            ref={submitted_dateInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="submitted_time">Time</label>
          <input
            type="time"
            required
            id="submitted_time"
            ref={submitted_timeInputRef}
          />
        </div>
        <br />
        <hr />
        <div className={classes.control}>
          <label html_for="start_date">Start Date</label>
          <input
            type="date"
            required
            id="start_date"
            ref={start_dateInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="end_date">End Date</label>
          <input type="date" required id="end_date" ref={end_dateInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="camper_gender">Camp Gender</label>
          <select id="camper_gender" ref={camper_genderInputRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className={classes.control}>
          <label html_for="camp_rate_one">Rate 1</label>
          <input
            type="number"
            required
            id="camp_rate_one"
            min="0.01"
            step="0.01"
            max="2500"
            ref={camp_rate_oneInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="camp_rate_two">Rate 2</label>
          <input
            type="number"
            required
            id="camp_rate_two"
            min="0.00"
            step="0.01"
            max="2500"
            ref={camp_rate_twoInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="discount_code">Discount Code</label>
          <input
            type="text"
            required
            id="discount_code"
            ref={discount_codeInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="discount_value">Discount Value</label>
          <input
            type="text"
            required
            id="discount_value"
            min="0.00"
            step="0.01"
            max="2500"
            ref={discount_valueInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="commission_percent">Commission (Percent)</label>
          <input
            type="number"
            required
            id="commission_percent"
            min="0"
            max="100"
            ref={commission_percentInputRef}
          />
        </div>

        <br />
        <hr />
        <div className={classes.control}>
          <label html_for="contact_one">Person of Contact 1</label>
          <input
            type="text"
            required
            id="contact_one"
            ref={contact_oneInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="contact_two">Person of Contact 2</label>
          <input
            type="text"
            required
            id="contact_two"
            ref={contact_twoInputRef}
          />
        </div>
        <br />
        <hr />

        <div className={classes.control}>
          <label html_for="phone_one">Phone 1</label>
          <input type="tel" required id="phone_one" ref={phone_oneInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="phone_two">Phone 2</label>
          <input type="tel" required id="phone_two" ref={phone_twoInputRef} />
        </div>
        <br />
        <hr />

        <div className={classes.control}>
          <label html_for="email_one">email 1</label>
          <input type="email" required id="email_one" ref={email_oneInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="email_two">email 2</label>
          <input type="email" required id="email_two" ref={email_twoInputRef} />
        </div>
        <br />
        <hr />

        <div className={classes.control}>
          <label html_for="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label html_for="city">City</label>
          <input type="text" required id="city" ref={cityInputRef} />
        </div>
        <div className={classes.control}>
          <label html_for="state">state</label>
          <input type="text" required id="state" ref={stateInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="zipcode">Zip Code</label>
          <input type="text" required id="zipcode" ref={zipcodeInputRef} />
        </div>

        <br />
        <hr />

        <div className={classes.control}>
          <label html_for="cargotype">Cargo Type</label>
          <select id="cargotype" ref={cargotypeInputRef}>
            <option value="duffle">duffle</option>
            <option value="duffle-large" selected>
              duffle large
            </option>
            <option value="box">box</option>
            <option value="trunk">trunk</option>
            <option value="bike">bike</option>
          </select>
        </div>

        <div className={classes.control}>
          <label html_for="servicetype">Service Type</label>
          <select id="servicetype" ref={servicetypeInputRef}>
            <option value="round-trip" selected>
              Round Trip
            </option>
            <option value="up-only">Up Only</option>
            <option value="return-only">Return Only</option>
          </select>
        </div>

        <br />
        <br />

        <div className={classes.control}>
          <label html_for="delivery_instructions">
            Camp Delivery Instructions
          </label>
          <textarea
            id="delivery_instructions"
            required
            rows="5"
            ref={delivery_instructionsInputRef}
          ></textarea>
        </div>

        <br />
        <br />

        <div className={classes.actions}>
          <button className="btn">Submit Camp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCampForm;
