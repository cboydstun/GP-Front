import React from "react";
import Nav from "../components/Nav";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div class="slider">
          <div class="imageChange"></div>
          <div class="content">
            <div class="hero">
              <h1>Klinic Doctor Leong</h1>
              <p>
                <button>Contact Us</button>
                <button>Book Now</button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;