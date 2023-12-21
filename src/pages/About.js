import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Sne's Toy Store</Typography>
        <p>
        Welcome to our toy store, a whimsical wonderland where joy knows no bounds and imagination takes flight! Nestled within these virtual shelves, you'll discover a treasure trove of enchanting playthings designed to spark creativity and endless hours of fun.

Our passion lies in curating a diverse collection that caters to every child's unique interests. From cuddly companions that offer comfort and companionship to cutting-edge tech toys that ignite curiosity and innovation, our expansive range ensures there's something delightful for every age and interest.

Step into a world where exploration knows no bounds. Explore our aisles filled with educational wonders that transform learning into an adventure, stimulating young minds and fostering a love for discovery. Embrace the joy of play with interactive games that encourage laughter, collaboration, and wholesome family bonding.

We take pride in not just offering toys but crafting experiences that inspire storytelling, ignite creativity, and nurture a child's innate sense of wonder. Our commitment to quality ensures that every toy that graces our shelves is not just an object but a gateway to imagination, crafted with care and attention to detail.

At our toy store, we strive to create more than just a shopping experience; we aim to be a part of your child's journey, accompanying them through the magical realms of childhood. Join us in fostering moments of joy, learning, and endless possibilities as we celebrate the pure, unbridled spirit of play.
        </p>
        <br />
       
      </Box>
    </Layout>
  );
};

export default About;
