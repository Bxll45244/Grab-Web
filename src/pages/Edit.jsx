import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    img: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
      .then((res) => res.json())
      .then((response) => setRestaurant(response))
      .catch((err) => console.log(err.message));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });

      if (response.ok) {
        // Handle success, e.g., navigate to another page or show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2xl text-center">Edit Restaurant</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Restaurant Name
        </label>
        <input
          type="text"
          className="grow"
          placeholder="Restaurant Name"
          name="name"
          onChange={handleChange}
          value={restaurant.name}
        />
        <label className="input input-bordered flex items-center gap-2">
          Restaurant Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Type"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Restaurant Image URL
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Image URL"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        {restaurant.img && (
          <div className="flex items-center gap-2">
            <img src={restaurant.img} className="h-32" alt="Restaurant" />
          </div>
        )}
        <button className="btn btn-success" onClick={handleSubmit}>
          Edit Restaurant
        </button>
      </div>
    </div>
  );
};

export default Edit;
