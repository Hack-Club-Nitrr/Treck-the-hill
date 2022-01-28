//Navbar
import Navbar from "../components/Navbar.js";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
