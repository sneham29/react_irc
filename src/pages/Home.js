import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/b.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <center>
          <h1>Sne's Toy Store</h1>
          <p>Safe and Best</p>

          </center>
          <Link to="/Login">
            <center>

            <button>LOGIN</button>
            </center>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
