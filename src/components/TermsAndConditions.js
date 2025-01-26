import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Banner from "../images/jungle.webp"; // Consider using an appropriate animation-related banner

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
          Terms and Conditions
        </Typography>
      </Box>

      {/* Overview Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1" color="textSecondary">
          At 3D Animal Animations, we aim to bring the beauty and realism of
          wildlife and mythical creatures to life through stunning 3D
          animations. Our work incorporates cutting-edge technology, animation
          techniques, and artistic vision to create lifelike, immersive
          experiences that captivate audiences and educate them about the
          natural world and imaginary creatures.
        </Typography>
      </Box>

      {/* Why 3D Animations Matter */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Why 3D Animations Matter
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Bringing Wildlife to Life:</strong> Our 3D animations
              provide a realistic portrayal of animals, helping people connect
              with the beauty and fragility of nature in an engaging and
              accessible way.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Exploring Mythical Creatures:</strong> With the help of
              advanced 3D techniques, we bring to life creatures from fantasy
              and mythology, offering a chance to experience worlds beyond our
              imagination.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Educational Impact:</strong> 3D animations are powerful
              tools for educating audiences about wildlife conservation, animal
              behavior, and the importance of biodiversity.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary">
              <strong>Artistic Expression:</strong> We push the boundaries of
              animation techniques to create awe-inspiring visuals that showcase
              the endless possibilities of artistic expression in the world of
              3D animation.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Impact of 3D Animations */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          The Impact of 3D Animal Animations
        </Typography>
        <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Raising Awareness:</strong> Our animations help raise
              awareness about endangered species and the importance of
              preserving wildlife.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Inspiring Creativity:</strong> Our animations encourage
              budding animators and artists to explore the world of 3D animation
              and nature in new, innovative ways.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Contributing to Conservation:</strong> Through our
              animations, we support conservation efforts by shedding light on
              the challenges that animals face and the importance of protecting
              their habitats.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              <strong>Entertainment and Education:</strong> We aim to strike a
              balance between entertainment and education, offering viewers the
              chance to experience realistic animations while learning about
              animal behavior.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Goals of 3D Animal Animations */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Goals for 3D Animations
        </Typography>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <Typography variant="body1" color="textSecondary">
              Create <strong>realistic animal animations</strong> that showcase
              the beauty of the natural world.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Feature <strong>mythical and fantasy creatures</strong> to expand
              the boundaries of imagination and storytelling.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Educate viewers on the{" "}
              <strong>importance of wildlife conservation</strong>
              and the challenges that animals face in the modern world.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Inspire the next generation of animators and artists to create
              innovative, thought-provoking works in the field of 3D animation.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Call to Action */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Become a Part of the Animation Revolution
        </Typography>
        <Typography variant="body1" color="textSecondary">
          By supporting 3D Animal Animations, you can help us continue to create
          lifelike, awe-inspiring animations that educate, entertain, and raise
          awareness about the natural world. Your involvement allows us to push
          the boundaries of creativity and conservation. Join us in making the
          world a better place for animals and people alike.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
