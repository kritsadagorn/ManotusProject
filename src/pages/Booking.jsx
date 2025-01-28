import React from "react";

const Booking = () => {
  const position = [
    {
      name: "ตำแหน่งที่ 1",
      descripe: "ตรงข้ามตึกศึกษาทั่วไป",
      image: "",
      link: "https://maps.app.goo.gl/4obuxmVc9QeZdwRb7",
    },
    {
      name: "ตำแหน่งที่ 2",
      descripe: "ที่จอดรถยนต์หน้าตึกศึกษาทั่วไป",
      image: "",
      link: "https://maps.app.goo.gl/np5fYMmVUZ26dCFW7",
    },
    {
      name: "ตำแหน่งที่ 3",
      descripe: "ที่จอดรถมอเตอร์ไซค์หลังตึกศึกษาทั่วไป",
      image: "",
      link: "https://maps.app.goo.gl/kqUDowVxtMXVPYQv5",
    },
    {
      name: "ตำแหน่งที่ 4",
      descripe: "ที่จอดรถยนต์อาจารย์หลังตึกศึกษาทั่วไป",
      image: "",
      link: "https://maps.app.goo.gl/N5w6LXxm5JF2FvVt7",
    },
  ];
  return (
    <div className="bg-[#dcdcdc] min-h-screen">
      <div className="flex justify-center items-center gap-10 pt-40">
        {position.map((data, i) => {
          return ( 
            <div className="bg-[#664C36] p-5 rounded-xl shadow-black/40 shadow-md" key={i}>
              <img
                src="https://via.assets.so/shoe.png?id=10&q=95&w=450&h=450&fit=fill"
                alt=""
                className="object-cover p-2 m-2"
              />
              <div className="text-4xl text-white font-Kanit mt-4">
                {data.name}
              </div>
              <div className="font-Kanit text-white text-xl mt-2">
                {data.descripe}
              </div>
              <div className="text-right">
                <a
                  href={data.link}
                  target="_blank"
                  className="font-Kanit text-white hover:underline mt-2"
                >
                  กดเพื่อดูสถานที่
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
