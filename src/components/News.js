import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  IconButton,
  Container,
  TextField,
} from "@mui/material";
import { AccessTime, Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Banner from "../images/jungle.webp";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(""); // State for the search keyword
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    axios
      .get("https://animation-backend.vercel.app/api/news/")
      .then((response) => {
        setNewsData(response.data);
        setFilteredNews(response.data); // Set initial filtered news data
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load news");
        setLoading(false);
      });
  }, []);

  // Filter news by search keyword
  useEffect(() => {
    let filtered = newsData;

    if (searchKeyword) {
      filtered = filtered.filter(
        (news) =>
          news.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          news.description.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    setFilteredNews(filtered);
  }, [searchKeyword, newsData]);

  if (loading)
    return (
      <Typography variant="h6" align="center">
        Loading news...
      </Typography>
    );
  if (error)
    return (
      <Typography variant="h6" align="center" color="error">
        {error}
      </Typography>
    );

  const handleCardClick = (id) => {
    navigate(`/news-details/${id}`);
  };

  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          height: { xs: "200px", sm: "250px", md: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Banner}
          alt="News Background"
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
          News
        </Typography>
      </Box>

      <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Latest News
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "lighter", marginTop: 2 }}>
            Stay updated with <br /> our recent activities and initiatives
          </Typography>
        </Box>

        {/* Search by keyword */}
        <TextField
          label="Search by keyword"
          variant="outlined"
          fullWidth
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          sx={{ marginBottom: 4 }}
        />

        <Grid container spacing={4} justifyContent="center">
          {filteredNews.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() => handleCardClick(news._id)}
              >
                {/* News Image */}
                <Box
                  sx={{ position: "relative", height: 200, overflow: "hidden" }}
                >
                  <img
                    src={
                      news.image?.secure_url ||
                      "https://via.placeholder.com/800"
                    }
                    alt={news.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* News Content */}
                <CardContent
                  sx={{
                    flexGrow: 1, // Allows content to grow and push the footer section to the bottom
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: 1.5,
                      fontSize: "1.5rem",
                      "&:hover": { color: "#1E90FF" },
                    }}
                  >
                    {news.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      fontSize: "0.875rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: "1.4",
                    }}
                  >
                    {news.description}
                  </Typography>

                  {/* <Divider sx={{ marginBottom: 2 }} /> */}
                </CardContent>

                {/* Date and Author Section at the Bottom */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 2,
                    borderTop: "1px solid #ddd", // Optional: Add a border between content and date/author section
                  }}
                >
                  {/* Date */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton sx={{ marginRight: 1 }}>
                      <AccessTime fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                      {new Date(news.date).toLocaleDateString()}
                    </Typography>
                  </Box>

                  {/* Author */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton sx={{ marginRight: 1 }}>
                      <Person fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                      {news.author}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default News;
