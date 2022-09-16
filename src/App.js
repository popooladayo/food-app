
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food App</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Food application" />
      </Helmet>
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
