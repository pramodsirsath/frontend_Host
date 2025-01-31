import React from "react";

const NoticeBoard = ({ notices }) => {
  return (
    <div className="notice-board bg-[#1f2937] p-8 rounded-lg shadow-lg">

      <ul className="space-y-4">
        {notices.map((notice, index) => (
          <li
            key={index}
            className="bg-[#2d3748] p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#60a5fa]">{notice.title}</h3>
            <p className="text-[#d1d5db] mt-2">{notice.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;
