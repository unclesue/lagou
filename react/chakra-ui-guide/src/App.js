import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/自定义复合组件";
import Card from "./components/卡片";
import Form from "./components/表单";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/card" element={<Card />} />
          <Route
            path="*"
            element={
              <Box p="4">
                <p>There's nothing here!</p>
              </Box>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
