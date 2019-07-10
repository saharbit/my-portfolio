import React from "react";
import Slider from "react-slick";
import "./carousel.scss";
import project1 from "../assets/project1.png";
import { ReactComponent as Github } from "../assets/github.svg";

const ProjectsCarousel = () => {
  return (
    <Slider {...settings}>
      <div className="flex-row carousel-item rounded items-center">
        <img src={project1} className="carousel-image border mr-3" />
        <div className="flex flex-col">
          <h2 className="project-name">Vue Stocks Visualizer</h2>
          <p className="project-description">
            A stocks portfolio visualizer made with Vue.js
          </p>
          <Github className="icon absolute github-link" />
        </div>
      </div>
      <div className="flex-row carousel-item rounded items-center">
        <img src={project1} className="carousel-image border mr-3" />
        <div className="flex flex-col">
          <h2 className="project-name">Vue Stocks Visualizer</h2>
          <p className="project-description">
            A stocks portfolio visualizer made with Vue.js
          </p>
        </div>
      </div>
      <div className="flex-row carousel-item rounded items-center">
        <img src={project1} className="carousel-image border mr-3" />
        <div className="flex flex-col">
          <h2 className="project-name">Vue Stocks Visualizer</h2>
          <p className="project-description">
            A stocks portfolio visualizer made with Vue.js
          </p>
        </div>
      </div>
    </Slider>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  className: "carousel-width"
};

export default ProjectsCarousel;
