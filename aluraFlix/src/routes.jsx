import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import NewVideo from "./pages/NewVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="create" element={<NewVideo />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
