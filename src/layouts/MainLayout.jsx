import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
