import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Banner from "../images/jungle.webp";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Banner Section with Parallax Effect */}
      <Box
        sx={{
          height: { xs: "200px", md: "300px" },
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          }}
        >
          GiveHope - Terms and Conditions
        </Typography>
      </Box>

      {/* Overview Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1" color="textSecondary">
          At GiveHope, we are dedicated to fighting poverty and supporting those
          in need. Through your generous contributions, we provide essential
          resources such as food, shelter, education, and healthcare to those
          who need it most. Your donations help bridge the gap between
          vulnerability and a brighter future for individuals and communities in
          need.
        </Typography>
      </Box>

      {/* Why Donations Matter */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Why Donations Matter
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Fighting Hunger:</strong> Donations provide access to
              essential food for families and individuals struggling with food
              insecurity.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Providing Shelter:</strong> We offer safe shelter for
              those without a home, giving them a secure place to rebuild their
              lives.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Access to Education:</strong> Donations fund educational
              programs for underprivileged children and adults, opening doors to
              a brighter future.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Health and Well-being:</strong> Support medical treatments
              and wellness programs that improve health outcomes in impoverished
              communities.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Impact of Donations */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          The Impact of Your Contributions
        </Typography>
        <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Emergency Relief:</strong> Providing immediate support to
              families in crisis situations, such as during natural disasters or
              financial hardship.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Food Distribution:</strong> Delivering nutritious food to
              communities facing hunger and malnutrition.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Job Training and Skill Development:</strong> Equipping
              individuals with the tools they need to break the cycle of
              poverty.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Health Services:</strong> Providing access to medical care
              and wellness programs to improve overall health in underserved
              communities.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Goals Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          What We Aim to Achieve
        </Typography>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <Typography variant="body1" color="textSecondary">
              Assist <strong>100,000 individuals annually</strong> through food,
              shelter, and education programs.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Provide <strong>medical aid</strong> to those in need, especially
              in remote or underserved areas.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Launch <strong>economic empowerment programs</strong> to help
              families become self-sufficient.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Set up <strong>mobile support units</strong> to reach impoverished
              areas and provide services directly where they're most needed.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Call to Action */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Be the Change - Give Hope
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Your donation can transform lives. Whether it's a financial
          contribution, donating goods, or your time, together we can remove
          poverty and create a future of hope and opportunity for those in need.
          Join us in making a difference today.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
