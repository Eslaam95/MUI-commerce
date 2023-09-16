/* eslint-disable react/prop-types */
import { ExpandMore } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  List,
  ListItemButton,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Links({ title, right = false }) {
  const navigate = useNavigate();
  const directionLink = right === true ? "-100%" : "100%";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        position: "relative",
        cursor: "pointer",
        ":hover .show-hover": { display: "block" },
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore />
      <Box
        className="show-hover"
        sx={{
          position: "absolute",
          zIndex: 99,
          top: "100%",
          left: "-10px",
          minWidth: "150px",
          py: 1,
          display: "none",
        }}
      >
        <Paper>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/dashboard")}>
                  <ListItemText primary="Sales" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  cursor: "pointer",

                  ":hover .show-hover-sub": { display: "block" },
                }}
              >
                <ListItemButton onClick={() => navigate("/dashboard")}>
                  <ListItemText primary="Products" />
                  <KeyboardArrowRightIcon />
                </ListItemButton>

                <Box
                  className="show-hover-sub"
                  sx={{
                    position: "absolute",
                    zIndex: 100,
                    top: "0%",
                    left: directionLink,
                    minWidth: "150px",
                    px: 1,
                    display: "none",
                  }}
                >
                  <Paper>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dashboard")}>
                          <ListItemText primary="Orders" />
                        </ListItemButton>
                      </ListItem>

                      <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dashboard")}>
                          <ListItemText primary="Stats" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/dashboard")}>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;
