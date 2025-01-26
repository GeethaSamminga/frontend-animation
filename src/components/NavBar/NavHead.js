import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Mail,
  Call,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const NavHead = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Left side: Contact info */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Mail sx={{ marginRight: 1, color: "black" }} />
          <Typography variant="body2" sx={{ color: "black", marginRight: 4 }}>
            support@givehope.site
          </Typography>
          {/* <Call sx={{ marginRight: 1, color: 'black' }} />
          <Typography variant="body2" sx={{ color: 'black' }}>
            +1-800-123-4567
          </Typography> */}
        </Box>

        {/* Right side: Social Media Icons (visible on tablet and desktop only) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Hide on mobile (xs), show on tablet and desktop (sm+)
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavHead;
