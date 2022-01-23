import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />

            <main>{children}</main>
            <Footer />
        </div>
    );
}
