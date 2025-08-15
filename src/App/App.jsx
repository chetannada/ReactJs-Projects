import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import BodyLayout from "./BodyLayout";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Outlet is for render Body and it's Children Component */}
        <BodyLayout>
          <Outlet />
        </BodyLayout>

        {/* Footer Component */}
        <Footer />

        {/* Manage all Toast notifications */}
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default App;
