import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Banner from "../images/jungle.webp";
import video from "../images/lion walk.mp4";
const AboutPage = () => {
  return (
    <>
      <Box>
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
            alt="Causes Background"
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
            About
          </Typography>
        </Box>

        <Box
          sx={{
            my: 6,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flex: 1,
              paddingRight: { xs: 0, sm: 4 },
              mb: { xs: 4, sm: 0 },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              Explore the World of 3D Animation Animals
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Dive into a captivating journey of lifelike 3D animal animations
              that bring the wild to life. From majestic lions to vibrant
              parrots, experience the beauty of nature like never before.
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
              See wildlife come alive in stunning detail through cutting-edge
              animations.
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
              Animations that educate and inspire.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                color: "#444",
                marginBottom: 3,
              }}
            >
              Perfect for education, entertainment, and creating awareness about
              the natural world. Our 3D animations offer a glimpse into the
              wonders of wildlife like never before.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
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
        </Box>

        {/* Main Content Container */}
        <Container maxWidth="lg" sx={{ width: "90%", mx: "auto" }}>
          {/* Meet Our Team Section */}
          <Box sx={{ textAlign: "center", my: 6 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Meet Our Team
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              The Talented Creators Behind Our 3D Animal Animations
            </Typography>
          </Box>

          {/* Team Cards */}
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "John Smith",
                role: "3D Animator & Wildlife Enthusiast",
                image:
                  "https://img.freepik.com/free-psd/3d-render-businessman-with-arms-crossed-wearing-brown-suit-gold-tie-he-looks-confident-professional_632498-32063.jpg?uid=R154992264&ga=GA1.1.1920711162.1733828512&semt=ais_hybrid", // Replace with real image URL
                description:
                  "With over 8 years of experience, John specializes in creating lifelike animal movements using tools like Blender and Maya. His animations bring wildlife to life.",
              },
              {
                name: "Emily Davis",
                role: "Creative Director & Visual Artist",
                image:
                  "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling_140725-162638.jpg?uid=R154992264&ga=GA1.1.1920711162.1733828512&semt=ais_hybrid", // Replace with real image URL
                description:
                  "Emily combines her artistic vision and technical expertise to craft breathtaking animations. She has worked on award-winning 3D projects.",
              },
              {
                name: "Michael Brown",
                role: "Technical Artist & Rigging Expert",
                image:
                  "https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg?uid=R154992264&ga=GA1.1.1920711162.1733828512&semt=ais_hybrid", // Replace with real image URL
                description:
                  "Michael’s expertise lies in creating advanced rigs for complex animal movements. His attention to detail ensures every animation feels real.",
              },
              {
                name: "Sophia Wilson",
                role: "Texture Artist & Environmental Designer",
                image:
                  "https://img.freepik.com/free-photo/serious-man-formal-jacket-tie-standing-camera_1262-20387.jpg?uid=R154992264&ga=GA1.1.1920711162.1733828512&semt=ais_hybrid", // Replace with real image URL
                description:
                  "Sophia creates stunning textures and natural environments to complement our 3D animals. Her designs add depth and realism to every project.",
              },
            ].map((teamMember, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "95%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="230"
                    image={teamMember.image}
                    alt={teamMember.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {teamMember.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      {teamMember.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {teamMember.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Container maxWidth="lg" sx={{ width: "100%", mx: "auto" }}>
            {/* Awards and Recognition Section */}
            <Box sx={{ textAlign: "center", my: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                Awards and Recognition
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Celebrating Excellence in 3D Animation
              </Typography>
            </Box>

            {/* Awards Cards */}
            <Grid container spacing={10} justifyContent="center">
              {[
                {
                  title: "Best 3D Animation Project 2024",
                  animation:
                    "https://cdn.pixabay.com/video/2024/09/22/232617_tiny.mp4", // Replace with your animation video URL
                  description:
                    "Awarded for creating lifelike animal animations that set new industry standards. Recognized at the Global Animation Awards.",
                },
                {
                  title: "Outstanding Animation Studio 2022",
                  animation:
                    "https://cdn.pixabay.com/video/2015/11/28/1438-147170157_tiny.mp4", // Replace with your animation video URL
                  description:
                    "Recognized as a leader in 3D animation, pushing the boundaries of technology and creativity.",
                },
                {
                  title: "Innovative Wildlife Animation 2023",
                  animation:
                    "https://cdn.pixabay.com/video/2021/01/12/61790-500762280_tiny.mp4", // Replace with your animation video URL
                  description:
                    "Honored for bringing the essence of wildlife to life through creative and innovative animations.",
                },
                {
                  title: "Excellence in Education 2021",
                  animation:
                    "https://cdn.pixabay.com/video/2022/07/31/126215-735676475_tiny.mp4", // Replace with your animation video URL
                  description:
                    "Awarded for producing educational 3D animal animations that inspire and engage learners globally.",
                },
              ].map((award, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  {/* Increased width on larger screens */}
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%", // Ensures all cards have the same height
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: 200,
                        overflow: "hidden", // Ensures the video fits within the card
                        borderRadius: "4px",
                      }}
                    >
                      <video
                        src={award.animation}
                        autoPlay
                        loop
                        muted
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Ensures the video covers the container
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        flexGrow: 1, // Ensures content area stretches equally
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {award.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {award.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
