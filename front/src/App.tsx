import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRoute } from "routes/HomeRoute";
import { SigninRoute } from "routes/SigninRoute";
import { UserRoute } from "routes/UserRoute";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/signin" element={<SigninRoute />} />
          <Route path="/user" element={<UserRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
