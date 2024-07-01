import React from 'react'

    const Add = () => {
const [restaurant, setRestaurant] = useState({
  title:"",
  type:"",
  img:""
})
const handleChange = (e) =>{
  const {name, value} = e.target;
  setRestaurant({...restaurant,[name]:value})
}
const handSubmit = async ()=>{
  try{
    const reponse = await fetch("http://localhost:3000/restaurants",{
  method: "POST",
  body: JSON.stringify(restaurant),
  });
  if(reponse.ok){
    alert("Restaurant added successfully!!!");
    setRestaurant({
      title:"",
      type:"",
      img:"",
    });
  }
}catch (error) {
  console.log (error);
  }
}
return (
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-4">Add New Restaurant</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={restaurant.title}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={restaurant.type}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="img" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="img"
          name="img"
          value={restaurant.img}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Restaurant
        </button>
      </div>
    </form>
  </div>
);
}



export default Add
  

