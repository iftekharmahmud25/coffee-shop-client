import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffeeDetails = async () => {
      try {
        const response = await fetch(
          `https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCoffee(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coffee details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCoffeeDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {coffee && (
        <div className="card card-side bg-blue-950 text-white shadow-xl py-7">
          <figure>
            <img
              className="w-[200px] h-[200px] object-fill"
              src={coffee.photo}
              alt={coffee.name}
            />
          </figure>
          <div className="ml-8">
            <h2 className="card-title">{coffee.name}</h2>
            <p>Quantity: {coffee.quantity}</p>
            <p>Supplier: {coffee.supplier}</p>
            <p>Taste: {coffee.taste}</p>
            <p>Category: {coffee.category}</p>
            <p>Details: {coffee.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeDetails;
