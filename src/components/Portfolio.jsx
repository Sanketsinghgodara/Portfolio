
// import { useNavigate } from "react-router-dom";
import todo from "../assets/portfolio/todoapp.png";
import password from "../assets/portfolio/password-generator.jpg";
import StoT from "../assets/portfolio/StoT.jpg";
import background from "../assets/portfolio/change-background-color-on-click-01.png";
import delivery from "../assets/portfolio/food delivery.jpeg";
import bmf from "../assets/portfolio/bmf.png";



const Portfolio = () => {
  
   
  const portfolios = [
    {
      id: 1,
      src: todo,
    },
    {
      id: 2,
      src: background,
    },
    {
      id: 3,
      src: StoT,
    },
    {
      id: 4,
      src: delivery,
    },
    {
      id: 5,
      src: password,
    },
    {
      id: 6,
      src: bmf,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                </button>
                <a href="https://github.com/Sanketsinghgodara">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
