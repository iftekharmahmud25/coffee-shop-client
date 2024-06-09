import React, { useEffect, useState } from "react";
import CoffeeCard from "../../componants/CoffeeCard/CoffeeCard";

const ViewCoffee = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    
    const fetchCoffees = async () => {
      try {
        const response = await fetch(
          "https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCoffees(data);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
      }
    };

    fetchCoffees();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Your Ordered Coffee</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 px-10 gap-10 ">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default ViewCoffee;
