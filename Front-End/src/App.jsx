import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import InstructorSignUpPage from "./pages/InstructorSignUpPage";
import VerificationPage from "./pages/VerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import StudentHome from "./pages/StudentHomePage";
import InstructorHome from "./pages/InstructorHomePage";

function App() {
  return (
    <div className="mx-auto">
      <Routes>
        {/*Home Routes*/}
        <Route path="/" element={<MainLayout />}>
          <Route
              path="/"
              element={<StudentHome/>}
          >
          </Route>
          <Route
              path="/instructor"
              element={<InstructorHome/>}
          >
          </Route>
        </Route>
        {/*Authentication Routes*/}
        <Route path="/" element={<AuthLayout />}>
          <Route
              path="/login"
              element={<LoginPage/>}
          >
          </Route>
          <Route
            path="/sign-up/student"
            element={<StudentSignUpPage></StudentSignUpPage>}>
          </Route>
          <Route
            path="/sign-up/instructor"
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
