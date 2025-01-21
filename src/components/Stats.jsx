import React from "react";

const Stats = () => {
  const parkingSlots = [
    { position: "ตำแหน่งที่ 1", status: "4/4", available: false },
    { position: "ตำแหน่งที่ 2", status: "2/4", available: true },
    { position: "ตำแหน่งที่ 3", status: "4/4", available: false },
    { position: "ตำแหน่งที่ 4", status: "4/4", available: false },
  ];

  return (
    <div className="border rounded-lg shadow-md w-full sm:w-[70%] md:w-[50%] lg:w-[30%]">
      <div className="text-xl font-Kanit text-center mb-5 bg-white p-2 rounded-xl">
        ตึกศึกษาทั่วไป
      </div>
      <div className="bg-[#42392C] text-white text-center py-2 rounded-t-lg font-Kanit font-bold">
        ที่จอดรถที่ว่างปัจจุบัน
      </div>
      <div className="bg-white p-4 font-Kanit">
        {parkingSlots.map((slot, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <span className="text-sm sm:text-lg">{slot.position}</span>
            <div className="flex items-center gap-2 font-Kanit">
              <span
                className={`px-4 sm:px-8 py-1 rounded-full text-white ${
                  slot.available ? "bg-green-700" : "bg-red-500"
                }`}
              >
                {slot.status}
              </span>
            </div>
            <button
              className={`px-2 sm:px-4 py-1 rounded-lg font-Kanit ${
                slot.available
                  ? "bg-[#664C36] text-white hover:bg-[#a88161] duration-200"
                  : "bg-[#352C25] text-white line-through cursor-not-allowed"
              }`}
              disabled={!slot.available}
            >
              จอง
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
