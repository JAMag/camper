import { useNavigate } from "react-router-dom";
import NewCampForm from "../components/camps/NewCampForm";

function NewCampPage() {
  const navigate = useNavigate();


  function addCampHandler(campData) {
    fetch(
      "https://camper-a740c-default-rtdb.firebaseio.com/camps.json", 
      {
      method: "POST",
      body: JSON.stringify(campData),
      headers: {
        "Content-Type": "application/json",
      }
    }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Camp</h1>
      <NewCampForm onAddCamp={addCampHandler} />
    </section>
  );
}

export default NewCampPage;
