import { useState, useEffect } from "react";
import CamperList from "../components/campers/CamperList";

function AllCampersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCampers, setLoadedCampers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://camper-a740c-default-rtdb.firebaseio.com/campers.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const campers = [];

        for (const key in data) {
          const camper = {
            id: key,
            ...data[key]
          };
          campers.push(camper);
        }

        setIsLoading(false);
        setLoadedCampers(campers);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Campers</h1>
      <CamperList campers={loadedCampers} />
    </section>
  );
}

export default AllCampersPage;
