import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminHostelFeedback() {
  const [feedbackData, setFeedbackData] = useState([]); // Initialize with an empty array
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch feedback data from API
  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get(
        "https://backend-eight-liart.vercel.app/api/v1/admin/hostelfeedback"
      );
      console.log(response.data); // Ensure correct API response format
      setFeedbackData(response.data.hostelfeedback || []); // Ensure it's an array
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Run API call once on component mount
  useEffect(() => {
    fetchFeedbackData();
  }, []);

  // Filter feedback based on search
  const filteredFeedback = feedbackData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting by rating
  const sortedFeedback = [...filteredFeedback].sort((a, b) =>
    sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    // <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
    <div className="w-[100%] h-[90vh] text-white bg-gray-800 mt-1 p-4">
    <h2 className="text-2xl font-bold mb-4">Admin Feedback Panel</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        className="w-full bg-gray-600 p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Rating ({sortOrder === "asc" ? "Low to High" : "High to Low"})
      </button>

      {/* Feedback Table */}
      <div className="overflow-x-auto overflow-y-auto h-[450px]">
        <table className="w-full border-collapse border overflow-y-auto h-[80vh]">
          <thead className="sticky top-0 ">
            <tr className="bg-gray-700">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Feedback</th>
              <th className="p-2 border">Rating</th>
            </tr>
          </thead>
          <tbody >
            {sortedFeedback.length > 0 ? (
              sortedFeedback.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.feedback}</td>
                  <td className="p-2 border">{item.rating} ⭐</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-2 border text-center text-gray-500">
                  No feedback available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHostelFeedback;
