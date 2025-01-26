import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroBanner from "./NavBar/HeroBanner";
import JagoHero from "./NavBar/JagoHero";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import IndiaMap from "../images/go.jpg";
import AnimalAnimationSection from "./animal";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  const [galleryImages, setGalleryImages] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          "https://animation-backend.vercel.app/api/services/"
        );
        console.log(response);
        setCardData(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCampaigns();
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          "https://animation-backend.vercel.app/api/animations/"
        );
        setGalleryImages(response.data.slice(0, 3)); // Only take the first 3
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchGallery();
  }, []);

  const handleCardClick = (id, type) => {
    if (type === "news") {
      navigate(`/news-details/${id}`);
    } else if (type === "services") {
      navigate(`/services-details/${id}`);
    } else if (type === "portfolio") {
      navigate(`/portfolio/${id}`);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroBanner />
      <br></br>
      <br></br>
      <br></br>
      <JagoHero />

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          <center style={{ fontWeight: "bold" }}>Top-Rated Services</center>
        </Typography>
        <br />
        <Grid container spacing={3}>
          {cardData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                onClick={() => handleCardClick(service._id, "services")}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column", // Stack content vertically
                  height: "100%", // Full height available in grid
                  justifyContent: "space-between", // Space out content so progress bar stays at the bottom
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image.secure_url}
                  alt={service.name}
                  height="200"
                  width="100%" // Ensure the image takes full width
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{service.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
      <AnimalAnimationSection />
      <br></br>
      {/* Gallery Section */}
      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          <center style={{ fontWeight: "bold" }}>Our Creations</center>
        </Typography>
        <Grid container spacing={3}>
          {galleryImages.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                onClick={() => handleCardClick(video._id, "portfolio")}
                sx={{ cursor: "pointer" }}
              >
                <CardMedia
                  component="video"
                  src={video.secure_url}
                  autoPlay
                  loop
                  muted // Assuming 'secure_url' is the video URL
                  alt={`Gallery Video ${index + 1}`}
                  height="200"
                  controls // Add controls for video playback
                  sx={{ width: "100%" }} // Ensures the video stretches across the card's width
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <br></br>
    </Box>
  );
};

export default Home;
