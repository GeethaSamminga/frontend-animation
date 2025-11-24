import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Container,
  Grid,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "../images/jungle.webp";

const Causes = () => {
  const [services, setServices] = useState([]); // Changed to services as per model
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]); // Filtered services
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend-animation.onrender.com/api/services/") // API call to fetch services
      .then((response) => {
        const servicesData = response.data; // Response from services endpoint
        console.log("API Response:", servicesData);
        if (Array.isArray(servicesData)) {
          setServices(servicesData);
          setFilteredServices(servicesData); // Set initial filtered services
        } else {
          console.error("Invalid data format:", servicesData);
          setError("Invalid response format");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter services based on selected category
  useEffect(() => {
    let filtered = services;

    if (selectedCategory) {
      filtered = filtered.filter(
        (service) =>
          service.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, services]);

  if (loading) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Loading services...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", color: "red" }}>
        Error: {error}
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          height: { xs: "200px", md: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateZ(0)",
          position: "relative",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Banner}
          alt="Services Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          }}
        >
          Our Services
        </Typography>
      </Box>

      {/* Category Filter Section */}
      <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "lighter", marginTop: 2 }}>
            Browse our top-rated services
          </Typography>
        </Box>

        {/* Category Dropdown */}
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          fullWidth
          displayEmpty
          sx={{ marginBottom: 4 }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="3D Animation">3D Animation</MenuItem>
          <MenuItem value="Promotional Videos">Promotional Videos</MenuItem>
          <MenuItem value="Game Animations">Game Animations</MenuItem>
          <MenuItem value="Educational Content">Educational Content</MenuItem>
          {/* Add other categories here */}
        </Select>

        <Grid container spacing={4} justifyContent="center">
          {filteredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      service.image?.secure_url ||
                      "https://via.placeholder.com/500"
                    }
                    alt={service.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Card Content */}
                <CardContent sx={{ flexGrow: 1, minHeight: 150 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: 2,
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#1E90FF",
                      },
                    }}
                  >
                    {service.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      fontSize: "0.875rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      lineHeight: "1.4",
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Know More Button */}
                  <center>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1E90FF",
                        "&:hover": { backgroundColor: "#3CB8FF" },
                      }}
                      onClick={() =>
                        navigate(`/services-details/${service._id}`)
                      }
                    >
                      Know More
                    </Button>
                  </center>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Causes;
