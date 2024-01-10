import React from "react";

const Hero = () => {
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
                <i class="fa-brands fa-whatsapp m-1"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-whatsapp m-1"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-whatsapp m-1"></i>
              </a>
              <a className="hover:text-yellow-700" href="">
                <i class="fa-brands fa-whatsapp m-1"></i>
              </a>
            </div>
          </div>
          <div className="text-start p-5">
            <button className="btn">
              Dukung Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <div className="my-3">
              <div className="flex py-2">
                <span className="flex items-center rounded-l-lg justify-center border border-gray-400 border-r-0 py-2 px-5 bg-success">
                  <i class="fa-brands fa-searchengin fa-bounce text-xl"></i>
                </span>
                <input
                  className="input-warning w-full max-w-xs border rounded-r-lg border-gray-400 p-3 focus:outline-none"
                  type="text"
                  placeholder="Cari Tau Tentang Saya"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
