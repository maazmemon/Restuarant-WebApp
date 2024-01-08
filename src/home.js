import React from "react";
import "./style.css";
import sheeshaLogo from "./sheesha.logo.jpeg";
import food from "./food_items";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import youtube from "./youtube (2).png";
import watsapp from "./watsapp.png";
import cloche from "./cloche.png";

const Home = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={sheeshaLogo} alt="sheesha" className="logo-img" />
      </div>
      <header className="header">
        <h2>SHEESHA DHABA</h2>

        <div className="social-media">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={watsapp} alt="watsapp" />
        </div>

        <div className="book-now">
          <button>
            <h1>Book Now</h1>
          </button>
        </div>
      </header>

      <div className="food">
        <div className="menu-line">
          <img src={food} alt="food_items" className="food-img" />
          <button>
            <h1>
              <b>MENU</b>
            </h1>
          </button>
        </div>
        <div className="cloche">
          <img src={cloche} alt="" />
        </div>
      </div>

      <div className="text">
        <h1>BRINGING CLASS TO CUISINE</h1>
      </div>

      <div className="second-container">
        <div className="about-us">
          <h2>ABOUT US</h2>
        </div>
      </div>

      <div className="buttons">
        <button>Home</button>
        <a href="gallery.html">
          <button>Gallery</button>
        </a>
        <button>Book Now</button>
        <button>Call Us</button>
      </div>

      <div className="dhaba">
        <h2>SHEESHA DHABA</h2>
        <div className="location-info">
          <p>Mumbai Bhiwandi Group</p>
          <p>Since 2015</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
