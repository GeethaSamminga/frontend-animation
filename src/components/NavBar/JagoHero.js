import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video from "../../images/WhatsApp Video 2025-01-24 at 11.50.06.mp4"; // Ensure this path is correct

const JagoHero = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate("/about");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack content on small screens, row on larger screens
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left side video */}
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" }, // Video takes 50% width on larger screens, 100% on smaller
          height: { xs: "auto", sm: "100%" }, // Set height to auto on smaller screens
          zIndex: 0, // Ensure the video stays behind the content
          display: "flex",
          justifyContent: "center", // Center video horizontally
        }}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover", // Ensure the video scales properly without being cut off
          }}
        />
      </Box>

      {/* Right side content */}
      <Container
        maxWidth="lg"
        sx={{
          width: { xs: "100%", sm: "50%" }, // Content takes 50% width on larger screens, 100% on smaller
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens, align left on larger
          zIndex: 1, // Ensure content is above the video
          paddingLeft: { sm: 4 }, // Add padding on the left side for larger screens
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            fontWeight: "bold",
            color: "#333",
            marginBottom: 2,
          }}
        >
          Experience the Art of 3D Animation Animals
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: "normal",
            color: "#1E90FF",
            marginBottom: 2,
          }}
        >
          Transforming imagination into stunning visuals.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            fontWeight: "light",
            color: "#777",
            marginBottom: 3,
          }}
        >
          Immersive animations that bring wildlife to life.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1.5rem" },
            color: "#444",
            marginBottom: 3,
            lineHeight: 1.6, // Adjust line height for better readability
          }}
        >
          Our 3D animation services include lifelike animal animations designed
          for educational platforms, games, and entertainment.
          <br />
          Example animations include:
          <Box
            component="ul"
            sx={{
              paddingLeft: { xs: "1.25rem", sm: "1.5rem" }, // Adjust for better alignment
              fontSize: { xs: "0.875rem", sm: "1.25rem" },
              listStyleType: "disc", // Ensures list items are displayed as bullet points
              marginTop: 1, // Adds space between the paragraph and the list
            }}
          >
            <li>Majestic lion roaming through the savannah</li>
            <li>Birds soaring and chirping in a lively environment</li>
            <li>A dragon breathing fire in a fantasy realm</li>
          </Box>
        </Typography>

        <Button
          variant="contained"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // Smaller font size for mobile
            padding: { xs: "8px 16px", sm: "10px 20px" }, // Adjust padding for mobile
            backgroundColor: "#1E90FF",
            color: "white",
            "&:hover": {
              backgroundColor: "#3CB8FF",
            },
          }}
          onClick={click}
        >
          Learn More About Our Services
        </Button>
      </Container>
    </Box>
  );
};

export default JagoHero;
