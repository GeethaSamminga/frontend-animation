import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Paper, Typography, Divider, Grid } from "@mui/material";

const NewsDetailsPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const [newsDetails, setNewsDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the detailed news data by id
  useEffect(() => {
    fetch(`https://backend-animation.onrender.com/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load news details");
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <Typography variant="h6" align="center">
        Loading details...
      </Typography>
    );
  if (error)
    return (
      <Typography variant="h6" align="center" color="error">
        {error}
      </Typography>
    );

  return (
    <Box sx={{ py: 5, px: "8%" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <Paper sx={{ mb: 3 }}>
              <img
                src={
                  newsDetails.image.secure_url ||
                  "https://via.placeholder.com/800"
                }
                alt="News Image"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Paper>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
              {newsDetails.title}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              {newsDetails.description}
            </Typography>

            <Divider sx={{ mt: 4 }} />

            {/* News Content */}
            {/* <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>
              Key Highlights
            </Typography> */}
            <Typography variant="body1" sx={{ mt: 2 }}>
              {newsDetails.content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsDetailsPage;
