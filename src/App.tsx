// App.tsx
import "./App.css";
import MyContainer from "./layout/MyContainer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./layout/Header"; 

function App() {
  return (
    <MyContainer>
      <Header /> 
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Outlet />
      </Box>
    </MyContainer>
  );
}

export default App;
