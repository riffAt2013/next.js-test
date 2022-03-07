import "/styles/globals.css";
import Navbar from "/components/navbar";
import Footer from "/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    // root container
    <div className="bg-amber-100">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
