import { Container, Typography } from "@mui/material";

export default function Footer({ description }) {
  return (
    <footer
      style={{ backgroundColor: "#302f2f", marginTop: "15px", padding: "15px" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </footer>
  );
}
