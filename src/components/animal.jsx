import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import jungle from "../images/jungle.webp";
const AnimalAnimationSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing

  const handleGalleryRedirect = () => {
    navigate("/portfolio"); // Redirect to the gallery page
  };

  return (
    <Container
      sx={{
        display: "flex", // Keep it in a row on all screen sizes
        flexDirection: "row", // Ensure row layout on all screen sizes
        my: 4,
        alignItems: "center",
        justifyContent: "space-between", // Ensure content is spread across the row
      }}
    >
      <Box sx={{ flex: 1, textAlign: "left" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: "1.25rem", sm: "3rem" }, fontWeight: "bold" }} // Decrease font size on mobile
        >
          3D Animal Animations
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" }, 
            display: { xs: "none", sm: "block" }, 
          }}
        >
          Experience the beauty of nature like never before! Our 3D animal
          animations bring the wild to life, offering a captivating view of
          various creatures in their natural habitat.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }} 
        >
          Immerse yourself in the world of 3D animations, where every detail
          tells a unique story of the animal kingdom.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#1E90FF", 
            color: "#fff",
            "&:hover": {
              backgroundColor: "#3CB8FF", 
            },
            fontSize: { xs: "0.75rem", sm: "1rem" }, 
          }}
          onClick={handleGalleryRedirect}
        >
          Explore More
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          mt: { xs: 2, sm: 0 }, 
        }}
      >
        <img
          src={jungle}
          alt="3D Animal Animation"
          style={{
            width: "100%",
            height: "auto",
          }}
          sx={{
            maxWidth: { xs: "200px", sm: "300px", md: "400px" },
            borderRadius: "8px",
            objectFit: "cover", 
          }}
        />
      </Box>
    </Container>
  );
};

export default AnimalAnimationSection;
