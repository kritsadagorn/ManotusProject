import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  const members = [
    {
      name: "กฤษฎากรณ์ ปุนนพานิช",
      uni_id: "รหัสนักศึกษา 65543206002-9",
      image:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/365203602_6117542865039292_8290961317508704418_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yaAj3dvOBl0Q7kNvgGDsbQ9&_nc_oc=Adh3oJaYuqHP7b4QW9QNtUOzEiJZqaOB-JjDM5UM2KPj3bFNBlnYcr5p0qbdIpOW1Cg&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=A1dFDmVeJW73N3rb5aVjfS0&oh=00_AYBM7OVIUo6FeGlTj8-Gx1PNvLfmPUPzt2MsdVc7idO6wQ&oe=67959479",
      social: { facebook: "http://www.facebook.com/kritsadagorn", github: "https://github.com/kritsadagorn" },
    },
    {
      name: "ธีรภัทร กันทอง",
      uni_id: "รหัสนักศึกษา 65543206017-7",
      image:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/453739155_122116306940377256_5009704031974300276_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s2lj0e81VicQ7kNvgEh-2N_&_nc_oc=AdhEmyuGeHml0qqAKjx04KoJZ-Ml9dXCRSYsGzQzn33oFMIUz_WqWxLWqP52YzOaORI&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=Ag2Wrx8m_PdAaLZwb2sbH57&oh=00_AYD83r7csKn3GAdb8KwWR3gSuqBnc3nrOspik_uxznU45Q&oe=6795A046",
      social: {
        facebook: "https://www.facebook.com/theeraphat.gunthong",
        github: "https://github.com/TheerapatGunthog",
      },
    },
    {
      name: "รชตะ รุ่งราตรี",
      uni_id: "รหัสนักศึกษา 65543206031-8",
      image:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/320748227_714295786624034_674374759426875360_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JG1-a0Vb9g8Q7kNvgGvOVBi&_nc_oc=Adh8WqMo1BKqC3LRmDriP6CXMMAm2eWYTGAAXTeFXMmwD5D6He1yeXrJsGenFcAwsuw&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=AnZU4nJMNcO9A1FkouEsmil&oh=00_AYCQxA--nFNJmDVLY20rw6goC9MoLX76gFEfEzoVurKsCg&oe=6795A605",
      social: {
        facebook: "https://www.facebook.com/rachata.roongratree.2024",
        github: "https://github.com/Rachatarr46",
      },
    },
    {
      name: "บุญประพัฒน์ ตานัน",
      uni_id: "รหัสนักศึกษา 65543206066-4",
      image:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/309701978_1945241255675088_6160863753271694712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=F9G3MzDrLe8Q7kNvgEyuIR0&_nc_oc=AdgwK51ssqN0GOhNt007ZM6QJpoQX7wvMTmlhtN-NPQ1igRwW9pqis3PpfBSU3tkos0&_nc_zt=23&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=AU35O01zeTZvgNqkpvrfMkq&oh=00_AYAt_LyDwA7nmi94vFy1t8ZvGXhe6_TsC7OVBWLDXS2t2w&oe=6795BDCA",
      social: {
        facebook: "https://www.facebook.com/kibeyakisera",
        github: "https://facebook.com/example",
      },
    },
    {
      name: "วุฒิภัทร ศรีคำ",
      uni_id: "รหัสนักศึกษา 65543206035-9",
      image:
        "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/369941466_6610273249055642_3834850599472434404_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=9B71b6p66vkQ7kNvgHgyJxT&_nc_oc=AdgINf1SNLE3xr8sVypaALfZSLQfIdJteC2mtVD75r3BcqVByMiaj5HK_fXfRaT-OCE&_nc_zt=24&_nc_ht=scontent.fcnx4-1.fna&_nc_gid=ABDxCsSvTavQ_KagRZrruDu&oh=00_AYDOAwHbvGbsVxy3QMc8qaoVWmmHLWMb6QX2gK8M96BHSA&oe=67958A8E",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100002190974853",
        github: "https://github.com/HANIBA2752",
      },
    },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-700 via-yellow-800 to-yellow-700 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-6 font-Kanit">
          ผู้จัดทำ
        </h1>
        <p className="text-center text-white mb-12 text-lg font-Kanit">
          เว็บไซต์จองที่จอดรถอาคารศึกษาทั่วไป มหาวิทยาลัยราชมงคลล้านนา เชียงใหม่
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative overflow-hidden font-Kanit"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brown-400 via-yellow-800 to-transparent opacity-20 pointer-events-none"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mt-6 border-4 border-yellow-900"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-yellow-800">
                  {member.name}
                </h2>
                <p className="text-yellow-600">{member.uni_id}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
