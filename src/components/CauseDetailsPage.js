import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // New state for login modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Fetch service details on mount
    axios
      .get(`http://localhost:5000/api/services/${id}`)
      .then((response) => {
        setService(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service details:", err);
        setError("Failed to load service details.");
        setLoading(false);
      });
  }, [id]);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/request/submit-request",
        {
          ...formData,
          serviceId: id, // Pass the current service ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Request submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setOpenModal(false); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting request:", error.message);
      toast.error("Failed to submit request. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Check user login before opening modal
  const handleRequestButtonClick = () => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      // toast.warn("Please log in to request an animation.", {
      //   position: "top-right",
      //   autoClose: 3000,
      // });
      setShowLoginModal(true); // Show login modal instead of redirecting to login page
      return;
    }

    // If user is logged in, open the modal
    setOpenModal(true);
  };

  // Close the login modal and redirect to the login page
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
    navigate("/login");
  };

  if (loading) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Loading service details...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", color: "red" }}>
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ py: 5, px: "8%" }}>
      <ToastContainer />
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Image First in Mobile, Then Text and Button */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ mb: 3 }}>
            <img
              src={
                service?.image?.secure_url || "https://via.placeholder.com/800"
              }
              alt={service?.name || "Service Image"}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {service?.name}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              {service?.description}
            </Typography>

            <Divider sx={{ mt: 4 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Price: ₹{service?.price?.toLocaleString()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, display: { xs: "none", md: "block" } }}
                >
                  Category: {service?.category}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: "40px",
                  ml: 2,
                  padding: "30px", // Adjust padding for mobile (xs) and larger screens (sm)
                }}
                onClick={handleRequestButtonClick}
              >
                Request Custom Animation
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Modal for the Request Form */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="request-modal-title"
        aria-describedby="request-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "50%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography
            id="request-modal-title"
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Custom Animation
          </Typography>

          <TextField
            label="Name"
            name="name"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Message"
            name="message"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={formData.message}
            onChange={handleInputChange}
          />

          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit Request
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal for Login Prompt */}
      <Modal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "50%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography
            id="login-modal-title"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Please log in to request an animation.
          </Typography>

          <Box sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginModalClose}
            >
              Go to Login
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ServiceDetailsPage;
