import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Typography
      variant="h1"
      sx={{
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#3a3e2d",
      }}
    >
      TODO LIST
    </Typography>
  );
}
