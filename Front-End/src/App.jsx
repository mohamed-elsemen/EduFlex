import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import InstructorSignUpPage from "./pages/InstructorSignUpPage";
import VerificationPage from "./pages/VerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route
            path="sign-up/student"
            element={<StudentSignUpPage></StudentSignUpPage>}
          ></Route>
          <Route
            path="sign-up/instructor"
            element={<InstructorSignUpPage></InstructorSignUpPage>}
          ></Route>
          <Route path="verification" element={<VerificationPage />}></Route>
          <Route
            path="forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
