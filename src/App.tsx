import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import CaloryIntake from "./pages/CaloryIntake";
import SignUpPage from "./pages/SignUpPage";
import CaloriesCalculator from "./pages/CaloriesCalculator";
import ExercisePage from "./pages/ExercisePage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/calory-intake":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/calories-calculator":
        title = "";
        metaDescription = "";
        break;
      case "/exercise-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-info-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/calory-intake" element={<CaloryIntake />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/calories-calculator" element={<CaloriesCalculator />} />
      <Route path="/exercise-page" element={<ExercisePage />} />
      <Route path="/user-info-page" element={<UserInfoPage />} />
    </Routes>
  );
}
export default App;
