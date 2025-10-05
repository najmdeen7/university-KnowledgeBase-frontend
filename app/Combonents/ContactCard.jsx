import React from "react";

const ContactCard = () => {
  return (
    <aside className="bg-[#0A2D57] text-white p-8 rounded-lg flex flex-col items-center justify-center text-center shadow-lg h-full ">
      <h2 className="text-2xl font-bold mb-2">أرسل لنا استفسارك!</h2>
      <p className="mb-6">
        في حال أنك لم تجد استفسارك هنا يمكنك كتابة استفسارك هنا
      </p>
      <button className="bg-white text-[#0A2D57] font-bold py-2 px-8 rounded-lg hover:bg-gray-200 transition-colors">
        تواصل معنا
      </button>
    </aside>
  );
};

export default ContactCard;
