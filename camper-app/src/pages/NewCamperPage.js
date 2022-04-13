import { useNavigate } from "react-router-dom";
import NewCamperForm from "../components/campers/NewCamperForm";

function NewCamperPage() {
  const navigate = useNavigate();


  function addCamperHandler(camperData) {
    fetch(
      "https://camper-a740c-default-rtdb.firebaseio.com/campers.json", 
      {
      method: "POST",
      body: JSON.stringify(camperData),
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
      <h1>Add New Camper</h1>
      <NewCamperForm onAddCamper={addCamperHandler} />
    </section>
  );
}

export default NewCamperPage;
