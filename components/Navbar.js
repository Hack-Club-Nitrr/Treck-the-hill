import Sidebar from "./Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ children }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 9fr" }}>
        <Sidebar />
      {children}
    </div>
  );
};

export default Navbar;
