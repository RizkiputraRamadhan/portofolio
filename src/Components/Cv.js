import React from 'react';

const Cv = () => {
  const pdfUrl = "https://drive.google.com/file/d/1VxAvWczhe_EnjCfQErBYpGvwvYc-w7Wv/view?usp=sharing";
  const handleViewCv = () => {
    window.open(pdfUrl, '_blank');
  }
  return (
    <>
      <div className='text-white text-center'>
      <p className="p-2 text-lg font-medium tracki text-center text-gray-50 uppercase">
        Curriculum Vitae
      </p>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-8border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2  left-1/2 dark:bg-gray-900">
          <svg
            class="w-4 h-4 text-white dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
        <button onClick={handleViewCv} className='btn border-2 border-red-600 m-3'>View CV <i class="fa-regular text-red-700 fa-file-pdf"></i></button>
      </div>
    </>
  );
};

export default Cv;
