import Link from "next/link";
import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_left}>
                    <h2>Menu</h2>
                    <p>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="https://games.sanjitsarda.com">
                            <a>Games</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/imnotreadyyetlol">
                            <a>Tools</a>
                        </Link>
                    </p>
                </div>
                <div className={styles.footer_middle}>
                    <h2>Legal</h2>
                    <p>
                        <Link href="/privacy">
                            <a>Privacy Policy</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/tos">
                            <a>Terms and Conditions</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/fish">
                            <a>Fish</a>
                        </Link>
                    </p>
                </div>
                <div className={styles.footer_right}>
                    <h2>Contact</h2>
                    <Link href="mailto:sanjitsarda4@gmail.com">
                        <a>
                            <i className="far fa-envelope fa-2x"></i>
                            sanjitsarda4@gmail.com
                        </a>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <div className={styles.icon_container}>
                        <Link href="https://www.linkedin.com/in/sanjitsarda/">
                            <a>
                                <i className="fab fa-linkedin-in fa-2x"></i>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sanjitsarda/">
                            <a>
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sanjitsarda/">
                            <a>
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <p>Copyright &copy; 2022 Sanjit Sarda</p>
        </footer>
    );
};

export default Footer;
/*
    Legal(Or so I think)
    Menu
    Contact


    Copyright
*/
