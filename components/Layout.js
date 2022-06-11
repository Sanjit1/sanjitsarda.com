import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import styles from "./styles/Layout.module.scss";

export default function Layout({ children }) {
    //console.log(styles.accept);
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
            </Head>

            <main>{children}</main>
            <Footer />
            <CookieConsent
                buttonText="Yuhh"
                style={{
                    background: "#003fae",
                    borderRadius: "10px",
                    margin: "5px",
                    width: "auto",
                    right: 0,
                }}
                buttonClasses={styles.accept}
                expires={150}
                acceptOnScroll={true}
                acceptOnScrollPercentage={30}
                acceptOnOverlayClick={true}
            >
                This website uses cookies. By continuing you are accepting said
                cookies. And before you ask, no they do not taste good.
            </CookieConsent>
        </div>
    );
}
