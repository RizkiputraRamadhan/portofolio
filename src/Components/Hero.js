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

  // Membersihkan localStorage saat komponen di-unmount
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
      <div
        className="hero min-h-screen p-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/N6K2tHb/wp2234546.jpg)",
        }}
      >
        <div className="card m-2 w-full glass">
          <figure className="p-5">
            <div className="avatar online">
              <div className="w-32 rounded-full">
                <img src="https://i.ibb.co/cJ8G4XP/profile.jpg" alt="car!" />
              </div>
            </div>
          </figure>
          <div className="text-center p-2 font-mono mb-5 text-white">
            <h2 className="font-bold text-xl">Rizki Putra Ramadhan</h2>
            <p className="text-sm text-slate-300">Fullstack web Development</p>
            <div className="p-2">
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-whatsapp m-1 text-xl"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-instagram m-1 text-xl"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-linkedin m-1 text-xl"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-github m-1 text-xl"></i>
              </a>
            </div>
          </div>
          <div className="text-start p-5">
            <button className="btn" onClick={handleButtonClick}>
              Dukungan
              <i
                class={`fa-regular fa-thumbs-up text-xl ${
                  isActive ? "text-success" : ""
                }`}
              ></i>
            </button>
            <div className="my-3">
              <div className="flex py-2">
                <span className="flex items-center rounded-l-lg justify-center border border-gray-400 border-r-0 py-2 px-5 bg-success">
                  <i class="fa-brands fa-searchengin text-xl"></i>
                </span>
                <input
                  className="input-warning w-full max-w-xs border rounded-r-lg border-gray-400 p-3 focus:outline-none"
                  type="text"
                  placeholder="Cari Tau Tentang Saya"
                />
              </div>
            </div>
          </div>
          {showAlert && (
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div className="text-success p-4 rounded">
              <i class="fa-solid fa-thumbs-up fa-bounce text-8xl"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
