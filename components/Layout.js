import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossOrigin="anonymous"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js"></script>

                <Script></Script>
            </Head>
            <main>{children}</main>
            <Footer />
        </div>
    );
}
