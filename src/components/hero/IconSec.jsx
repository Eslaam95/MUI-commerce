import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { useTheme } from "@emotion/react";
function IconSec() {
  const theme = useTheme();
  return (
    <Container>
      <Stack
        divider={
          useMediaQuery("(min-width:765px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction="row"
        justifyContent={"space-between"}
        sx={{
          gap: 1,
          bgcolor: theme.palette.mode === "dark" ? "#111" : "#fff",
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <Iconbox
          icon={<ElectricBoltOutlinedIcon fontSize="large" />}
          title="Fast Delivery"
          subtitle="Start from $10"
        />
        <Iconbox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title="Money Guarantee"
          subtitle="7 Days Back"
        />
        <Iconbox
          icon={<AccessAlarmsOutlinedIcon fontSize="large" />}
          title="365 Days"
          subtitle="For free return"
        />
        <Iconbox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title="Payment"
          subtitle="Secure system"
        />
      </Stack>
    </Container>
  );
}

export default IconSec;

// eslint-disable-next-line react/prop-types
function Iconbox({ icon, title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: useMediaQuery("(min-width:500px)") ? "center" : "left",
        gap: 2,
        flexGrow: 1,
        minWidth: "220px",
        py: 3,
        px: 1,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
