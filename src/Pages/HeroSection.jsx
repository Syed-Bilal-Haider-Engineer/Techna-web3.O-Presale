import { Box, Container } from "@mui/material";
import { StyledTitle } from "../Components/SmallComponents/AppComponents";

export default function HeroSection() {
  return (
    <Box>
      <Container maxWidth="xl">
        <StyledTitle>New App</StyledTitle>
      </Container>
    </Box>
  );
}
