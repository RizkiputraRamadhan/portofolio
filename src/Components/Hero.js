import React, { useEffect, useState } from "react";

const Hero = () => {
  const initialIsActive = localStorage.getItem("isActive") === "true";
  const [isActive, setIsActive] = useState(initialIsActive);
  const [showAlert, setShowAlert] = useState(false);
  const handleButtonClick = () => {
    if (!isActive) {
      setIsActive(true);
      localStorage.setItem("isActive", "true");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => localStorage.removeItem("isActive");
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leadi sm:text-4xl">
              <p className="text-violet-400">Halo Semua 👋, Saya</p>
              <span>RIZKI PUTRA RAMADHAN </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Mahasiswa <span className="font-bold text-violet-400">
                 Universitas Bina Sarana Informatika Tegal
              </span>
              <br />
              Website ini berisi portofolio singkat saya, website yang dibuat
              dengan React Js , Tailwind dan sedikit API Repository Github .
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                onClick={handleButtonClick}
                className={`btn  ${isActive ? "btn-outline btn-success" : ""}`}
              >
                Dukungan
                <i
                  class={`fa-regular fa-thumbs-up text-xl ${
                    isActive ? "text-success" : ""
                  }`}
                ></i>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/XWyJz69/snapedit-1704984365022-removebg.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {showAlert && (
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <div className="text-success p-4 rounded">
            <i class="fa-solid fa-thumbs-up fa-bounce text-8xl"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
