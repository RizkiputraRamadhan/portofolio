import axios from "axios";
import React, { useEffect, useState } from "react";
const GitHub = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/RizkiputraRamadhan/repos`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        const projectsWithLanguages = await Promise.all(
          response.data.map(async (project) => {
            const languagesResponse = await axios.get(
              `${process.env.REACT_APP_API_URL}/repos/RizkiputraRamadhan/${project.name}/languages`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
              }
            );

            return {
              ...project,
              languages: Object.keys(languagesResponse.data),
            };
          })
        );

        setProjects(projectsWithLanguages);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="justify-center">
      <div className="text-2xl w-34 mb-3 font-bold sm:text-4xl text-gray-50 divider divider-primary ">
        Repository Github
      </div>
      <div className=" flex flex-col max-w-lg p-6 m-5 divide-y rounded-md divide-gray-300 dark:bg-gray-800 text-gray-100 border">
        <div className="flex justify-between p-4 w-">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://i.ibb.co/cJ8G4XP/profile.jpg"
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">RizkiputraRamadhan</h4>
              <span className="text-xs text-gray-200">
                Rizki Putra R ( Team Kuli It ) <br />
              </span>
              <h2 className="text-lg font-bold text-yellow-400">
                {projects.length}
                <span className="text-xs"> Repo Publish</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="text-gray-600"></div>
      </div>
      {projects.length === 0 ? (
        <>
          <div className="my-5">
            <div className="text-lg font-bold text-yellow-400 items-center animate-pulse text-center ">
              Sedang mengambil data dari Github{" "}
              <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>
            <div className="flex my-5 items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
            </div>
          </div>
        </>
      ) : (
      <ul>
        <section className="py-6 dark:bg-gray-800 ">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
              {projects.map((project) => (
                <>
                  <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-20 sm:w-20 sm:mb-0">
                      <img
                        src={project.owner.avatar_url}
                        alt=""
                        className="object-cover object-center w-full h-full rounded bg-gray-500"
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <a href={project.clone_url}>
                        <div>
                          <h2 className="text-xl font-semibold">
                            {project.name}
                          </h2>
                          <span className="text-sm text-gray-400">
                            {project.description}
                          </span>
                        </div>
                      </a>

                      <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                          <i class="fa-regular fa-calendar"></i>
                          <span className="text-gray-400">
                            {project.created_at.split("T")[0]}
                          </span>
                        </span>
                      </div>
                      <div className=" grid grid-cols-3 gap-3 lg:grid-cols-3 sm:grid-cols-2">
                        {project.languages.map((language, index) => (
                          <>
                            <button className="btn  btn-outline btn-success btn-xs">
                              {language}
                              {index !== project.languages.length - 1 && " "}
                            </button>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </ul>
      )}
    </div>
  );
};
export default GitHub;
