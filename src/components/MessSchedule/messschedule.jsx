import React, { useState } from "react";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const menuData = {
  Sunday: {
    breakfast: [{ name: "Misal Pav", img: "/assets/misalpav.jpg" }],
    lunch: [
      { name: "Chana Masala", img: "/assets/kabulichana.png" },
      { name: "Aloo Sabji", img: "/assets/aloo.png" },
      { name: "Palak Puri", img: "/assets/palakpuri.jpg" },
      { name: "Dhokla", img: "/assets/dhokla.png" },
    ],
    dinner: [{ name: "Dinner is off" }],
  },
  Monday: {
    breakfast: [
      { name: "Sambar Vada", img: "/assets/vada.jpg" },
      { name: "Apple", img: "/assets/apple.jpg" },
    ],
    lunch: [
      { name: "Veg Pulao", img: "/assets/pulao.jpg" },
      { name: "Butter Paneer", img: "/assets/butterpaneer.jpg" },
    ],
    dinner: [
      { name: "Malai Kofta", img: "/assets/malaikof.png" },
    ],
  },
  Tuesday: {
    breakfast: [{ name: "Poha", img: "/assets/rajmachawal.png" }],
    lunch: [{ name: "Rajma Chawal", img: "/assets/rajmachawal.png" }],
    dinner: [{ name: "Paneer Masala", img: "/assets/paneermasala.png" }],
  },
  Wednesday: {
    breakfast: [{ name: "Idli Sambhar", img: "/assets/idlisambar.png" }],
    lunch: [{ name: "Bhindi Masala", img: "/assets/bhindi.png" }],
    dinner: [{ name: "Dal Tadka", img: "/assets/daltadka.png" }],
  },
  Thursday: {
    breakfast: [{ name: "Sandwich", img: "/assets/sandwich.png" }],
    lunch: [{ name: "Matar Paneer", img: "/assets/matarpaneer.png" }],
    dinner: [{ name: "Veg Biryani", img: "/assets/vegbiryani.png" }],
  },
  Friday: {
    breakfast: [{ name: "Upma", img: "/assets/upma.png" }],
    lunch: [{ name: "Lemon Rice", img: "/assets/lemonrice.png" }],
    dinner: [{ name: "Chicken", img: "/assets/chicken.png" }],
  },
  Saturday: {
    breakfast: [{ name: "Uttapam", img: "/assets/uttapam.png" }],
    lunch: [{ name: "Soyabean", img: "/assets/soya.png" }],
    dinner: [{ name: "Pav Bhaji", img: "/assets/pavbhaji.jpg" }],
  },
};

function MessSchedule() {
  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];
  const [selectedDay, setSelectedDay] = useState(currentDay);

  const todayMenu = menuData[selectedDay] || {
    breakfast: [],
    lunch: [],
    dinner: [],
  };

  return (
    <div className="bg-[#1f2937] min-h-screen pt-20 text-[#d1d5db] font-sans">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#60a5fa]">Mess Schedule</h1>
        <p className="mt-4 text-lg">
          Breakfast: <span className="text-[#d1d5db]">7:30 - 9:00 AM</span> | 
          Lunch: <span className="text-[#d1d5db]">12:30 - 2:00 PM</span> | 
          Dinner: <span className="text-[#d1d5db]">7:30 - 9:00 PM</span>
        </p>
      </div>

      {/* Menu Section */}
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-[#283547]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[#60a5fa]">
            {selectedDay === currentDay ? `Today's Mess Menu - ${selectedDay}` : `Mess Menu - ${selectedDay}`}
          </h2>
        </div>

        {/* Structured Menu */}
        <div>
          <MenuSection title="Breakfast" items={todayMenu.breakfast} />
          <MenuSection title="Lunch" items={todayMenu.lunch} />
          <MenuSection title="Dinner" items={todayMenu.dinner} />
        </div>
      </div>

      {/* Day Selector */}
      <div className="text-center mt-12 pb-8">
        <h3 className="text-lg font-semibold text-[#60a5fa]">
          Want to check another day?
        </h3>
        <div className="flex justify-center mt-4 gap-4">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedDay === day
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              } transition-transform transform hover:scale-105`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuSection({ title, items }) {
  return (
    <div className="mb-8">
      <h3 className="text-center text-2xl font-semibold text-[#60a5fa] mb-6">{title}</h3>
      {items.length > 0 ? (
        <div
          className={`justify-items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full group text-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-transform hover:scale-105 bg-[#2d3748]"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-32 object-cover mx-auto group-hover:opacity-75 transition-opacity"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                <p className="text-lg font-medium text-white">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items available</p>
      )}
    </div>
  );
}

export default MessSchedule;