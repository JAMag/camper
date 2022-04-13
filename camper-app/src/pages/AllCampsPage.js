import { useState, useEffect } from "react";
import CampList from "../components/camps/CampList";

function AllCampsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCamps, setLoadedCamps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://camper-a740c-default-rtdb.firebaseio.com/camps.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const camps = [];

        for (const key in data) {
          const camp = {
            id: key,
            ...data[key]
          };
          camps.push(camp);
        }

        setIsLoading(false);
        setLoadedCamps(camps);
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
      <h1>All Camps</h1>
      <CampList camps={loadedCamps} />
    </section>
  );
}

export default AllCampsPage;
