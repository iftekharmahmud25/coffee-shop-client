import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log("Delete response data:", data);
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the coffee.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the coffee.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="card  lg:w-full w-96 card-side bg-blue-950 text-white shadow-xl py-4 lg:py-7">
        <figure>
          <img
            className="lg:w-[200px] lg:h-[200px] w-[100%] object-fill"
            src={photo}
            alt={name}
          />
        </figure>
        <div className="flex justify-between w-full">
          <div className="ml-8">
            <h2 className="card-title text-xs">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Details: {details}</p>
          </div>
          <div className="join join-vertical space-y-5 mt-7 lg:mt-0 lg:space-y-3 px-7">
            <Link to={`/detailsCoffee`}>
              <button className="btn join-item w-32">View</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item w-32">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
