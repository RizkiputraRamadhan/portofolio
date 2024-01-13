const About = () => {
  return (
    <>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-800 text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold leadi md:text-5xl">
            Identitas Saya
          </h1>
          <p className="text-sm text-gray-400">RIZKI PUTRA RAMADHAN</p>
        </div>
        <div className="pt-12 border-t border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://i.ibb.co/cJ8G4XP/profile.jpg"
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">RIZKI PUTRA RAMADHAN</h4>
              <p className="text-gray-400">
                Saya adalah mahasiswa universitas bina sarana informatika kota
                tegal jurusan D3 sistem informasi. <br />
                <br />
                <div className="space-y-1">
                  <span className="flex items-center space-x-2">
                    <i class="fa-solid fa-user-graduate"></i>
                    <span className="dark:text-gray-400">
                      Rizki Putra Ramadhan ( Bang Iki )
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <i class="fa-solid fa-calendar-week"></i>
                    <span className="dark:text-gray-400">03 November 2004</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <span className="dark:text-gray-400">
                      RT 01/10, Desa Tipar Kec Rawalo Kab Banyumas
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <i class="fa-solid fa-laptop-code"></i>
                    <span className="dark:text-gray-400">Web Development</span>
                  </span>
                </div>
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="https://github.com/RizkiputraRamadhan"
              aria-label="GitHub"
              className="rounded-md  hover:text-violet-400"
            >
              <i class="fa-brands text-xl fa-flip fa-square-git"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://wa.me/6285600565597?text=Hi Kuli IT Tecno"
              aria-label="whatsapp"
              className="rounded-md text-gray-100 hover:text-violet-400"
            >
              <i class="fa-brands text-xl fa-shake fa-square-whatsapp"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/sukherbyvir45/"
              aria-label="instagram"
              className="rounded-md text-gray-100 hover:text-violet-400"
            >
              <i class="fa-brands text-xl fa-beat-fade fa-instagram"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rizki-putra-ramadhan-4a937a289/"
              aria-label="Likenid"
              className="rounded-md text-gray-100 hover:text-violet-400"
            >
              <i class="fa-brands text-xl fa-bounce fa-linkedin"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:poetraarromadhon56@gmail.com"
              aria-label="Email"
              className="rounded-md text-gray-100 hover:text-violet-400"
            >
              <i class="fa-solid text-xl fa-shake fa-envelope-open-text"></i>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
