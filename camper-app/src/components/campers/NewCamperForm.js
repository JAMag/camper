import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewCamperForm.module.css";

function NewCamperForm(props) {
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const camper_nameInputRef = useRef();
  const camper_genderInputRef = useRef();
  const camper_siblingInputRef = useRef();
  const returning_camperInputRef = useRef();
  const campnameInputRef = useRef();
  const camper_imageInputRef = useRef();
  const discount_codeInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const zipcodeInputRef = useRef();
  const cargotypeInputRef = useRef();
  const servicetypeInputRef = useRef();
  const delivery_instructionsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const entereddateInputRef = dateInputRef.current.value;
    const enteredtimeInputRef = timeInputRef.current.value;
    const enteredcamper_nameInputRef = camper_nameInputRef.current.value;
    const enteredcamper_genderInputRef = camper_genderInputRef.current.value;
    const enteredcamper_siblingInputRef = camper_siblingInputRef.current.value;
    const enteredreturning_camperInputRef =
      returning_camperInputRef.current.value;
    const enteredcampnameInputRef = campnameInputRef.current.value;
    const enteredcamper_imageInputRef = camper_imageInputRef.current.value;
    const entereddiscount_codeInputRef = discount_codeInputRef.current.value;
    const enteredaddressInputRef = addressInputRef.current.value;
    const enteredcityInputRef = cityInputRef.current.value;
    const enteredstateInputRef = stateInputRef.current.value;
    const enteredzipcodeInputRef = zipcodeInputRef.current.value;
    const enteredcargotypeInputRef = cargotypeInputRef.current.value;
    const enteredservicetypeInputRef = servicetypeInputRef.current.value;
    const entereddelivery_instructionsInputRef =
      delivery_instructionsInputRef.current.value;

    const camperData = {
      date: entereddateInputRef,
      time_submitted: enteredtimeInputRef,
      camper_name: enteredcamper_nameInputRef,
      camper_gender: enteredcamper_genderInputRef,
      camper_sibling: enteredcamper_siblingInputRef,
      returning_camper: enteredreturning_camperInputRef,
      camp_name: enteredcampnameInputRef,
      camper_image: enteredcamper_imageInputRef,
      discount_code: entereddiscount_codeInputRef,
      address: enteredaddressInputRef,
      city: enteredcityInputRef,
      state: enteredstateInputRef,
      zipcode: enteredzipcodeInputRef,
      cargo_type: enteredcargotypeInputRef,
      service_type: enteredservicetypeInputRef,
      delivery_instructions: entereddelivery_instructionsInputRef,
    };

    console.log(camperData);

    props.onAddCamper(camperData);
  }

  return (
    <Card>
      <br/>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label html_for="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="time">Time</label>
          <input type="time" required id="time" ref={timeInputRef} />
        </div>
        <br />
        <hr />

        <div className={classes.control}>
          <label html_for="camper_name">Camper Name</label>
          <input
            type="text"
            required
            id="camper_name"
            ref={camper_nameInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="camper_gender">Camper Gender</label>
          <select id="camper_gender" ref={camper_genderInputRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className={classes.control}>
          <label html_for="camper_sibling">Camper Siblings</label>
          <input
            type="checkbox"
            id="campersibling"
            name="campersibling"
            value="sibling"
            ref={camper_siblingInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label html_for="returning_camper">Returning Camper</label>
          <input
            type="checkbox"
            id="returning_camper"
            name="returning_camper"
            value="returning_camper"
            ref={returning_camperInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label html_for="camp">Camp</label>
          {/* <input
            type="text"
            required
            id="camp"
            ref={campInputRef}
            list="campname"
          /> */}
          <select id="campname" ref={campnameInputRef}>
            <option value="Takajo">Takajo</option>
            <option value="Wikita">Wikita</option>
            <option value="Ramah">Ramah</option>
            <option value="Laurel South">Laurel South</option>
          </select>
        </div>

        <div className={classes.control}>
          <label html_for="camper_image">Camper Image</label>
          <input
            type="text"
            required
            id="camper_image"
            ref={camper_imageInputRef}
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
          <label html_for="cargo-number">Number of Cargo</label>
          <input
            type="number"
            required
            id="cargo-number"
            min="0"
            ref={addressInputRef}
          />
        </div>

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
            Home Delivery Instructions
          </label>
          <textarea
            id="delivery_instructions"
            required
            rows="5"
            cols="100"
            ref={delivery_instructionsInputRef}
          ></textarea>
        </div>

        <br />
        <br />

        <div className={classes.actions}>
          <button className="btn">Submit Camper</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCamperForm;
