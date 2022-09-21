import { Box } from "@chakra-ui/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
