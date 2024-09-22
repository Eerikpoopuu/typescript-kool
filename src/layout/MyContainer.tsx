import { Container, Box } from "@mui/material";
import { ReactNode } from "react";

type MyContainerProps = {
  children: ReactNode;
};

export default function MyContainer({ children }: MyContainerProps) {
  return (
    <Container maxWidth="sm" sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 3,
          borderRadius: 2,
          boxShadow: 1,
          minWidth: 300,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
