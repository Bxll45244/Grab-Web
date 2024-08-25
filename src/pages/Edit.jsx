import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // นำเข้า useNavigate เพื่อใช้สำหรับการนำทาง

const Edit = () => {
  const { id } = useParams(); // ดึง id จาก URL
  const navigate = useNavigate(); // สร้างตัวแปร navigate สำหรับการนำทาง
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    image: "",
  });

  // ดึงข้อมูลร้านอาหารตาม id จาก URL
  useEffect(() => {
    fetch("http://localhost:5173/restaurants/" + id)
      .then((res) => res.json())
      .then((response) => setRestaurant(response))
      .catch((err) => console.log(err.message));
  }, [id]);

  // ฟังก์ชันจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // ฟังก์ชันจัดการเมื่อส่งฟอร์ม
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
        navigate("/"); // นำทางกลับไปที่หน้าหลักหลังจากแก้ไขสำเร็จ
      } else {
        // จัดการข้อผิดพลาดถ้าเกิดขึ้น
        console.log("Error updating restaurant.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Edit Restaurant</h1>
      <div className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Name"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Type</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Type"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Image URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Image URL"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </div>
        {restaurant.img && (
          <div className="flex items-center gap-2">
            <img src={restaurant.img} className="h-32" alt="Restaurant" />
          </div>
        )}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Update Restaurant
        </button>
      </div>
    </div>
  );
};

export default Edit;
