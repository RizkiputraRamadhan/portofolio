const Qoutes = () => {
  return (
    <>
      <section className="p-6">
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-900 text-gray-100">
            <img
              src="https://i.ibb.co/yp1kQj6/kuliit-logo.png"
              alt=""
              className="w-32 "
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
            pak rusito pernah bilang <br/> "latihlah otak kamu dengan memahami algoritma, jangan sekedar bisa tapi paham dengan algoritma!"
            </blockquote>
            <div className="text-center text-gray-400">
              <p>Rizki Putra Ramadhan</p>
              <p>Maker of Kuli IT Tecno.</p>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                aria-label="Page 1"
                className="w-2 h-2 rounded-full bg-gray-50"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qoutes;
