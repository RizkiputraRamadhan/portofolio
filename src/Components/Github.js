import axios from "axios";
import React, { useEffect, useState } from "react";
const GitHub = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/RizkiputraRamadhan/repos",
          {
            headers: {
              Authorization:
                "Bearer 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",
            },
          }
        );
        // Mendapatkan data bahasa untuk setiap proyek
        const projectsWithLanguages = await Promise.all(
          response.data.map(async (project) => {
            const languagesResponse = await axios.get(
              `https://api.github.com/repos/RizkiputraRamadhan/${project.name}/languages`,
              {
                headers: {
                  Authorization:
                    "Bearer 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",
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
    </div>
  );
};
export default GitHub;
