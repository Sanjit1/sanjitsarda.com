import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Navbar.module.scss";

function Navbar() {
    var [navToggled, setNavToggled] = useState(false);
    var [containerStyle, setContainStyle] = useState(styles.nav_container);
    var [linksStyle, setLinksStyle] = useState(styles.links);
    var [wvStyle, setWvStyle] = useState(styles.wv);
    var [navStyle, setNavStyle] = useState(styles.navbar);
    useEffect(() => {
        console.log(navToggled);
        if (navToggled) {
            setContainStyle(styles.nav_container + " " + styles.responsive);
            setLinksStyle(styles.links + " " + styles.responsive);
            setWvStyle(styles.wv + " " + styles.responsive);
            setNavStyle(styles.navbar + " " + styles.responsive);
        } else {
            setContainStyle(styles.nav_container);
            setLinksStyle(styles.links);
            setWvStyle(styles.wv);
            setNavStyle(styles.navbar);
        }
    }, [navToggled]);
    return (
        <>
            <nav className={navStyle}>
                <div className={containerStyle}>
                    <Link href="/">
                        <a className={styles.nav_home + " " + linksStyle}>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 492.71 400.68"
                                width={40}
                                height={40}
                            >
                                <path
                                    className={styles.cls_1}
                                    d="M243.7,107.55c16.16.49,29.19,25.73,29.19,56.79s-13,56.3-29.19,56.8l-.28-.23h82.72c16.17-.49,29.2-25.73,29.2-56.79s-13-56.3-29.2-56.79H243.42"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_2}
                                    d="M348.65,109.42c0,8,20.37,25.87,15.93,56.62s-16.1,57.6-32.17,55.83l-.24-.26,54.46,3.11h0c16.07,1.77,42.61-21.19,47.05-51.93s6.71-38.71-9.22-41.46h0l-76-22.16Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_1}
                                    d="M444.38,144.86c5.84,1.92,73,52.95,21.41,88.57-32.75,22.62-61.21,21.55-77,1.38-.73-.93-1.4-1.88-2-2.86,15-5.66,30.52-12.07,43.85-27.86,15.9-18.83,9.14-45.58,12.38-59.88C442.44,143.89,442.45,144.22,444.38,144.86Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_2}
                                    d="M491.34,218.44c8.52-1.38,4.62,64.09-22.63,67.94-39.54,5.59-70.07-1.92-78.22-33.8a9.59,9.59,0,0,1,.28-3.48c15.2,5.1,39.26,9.49,58.48,1.66C465.79,244,479,226,490.67,217,490.46,216.47,489.32,218.76,491.34,218.44Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_1}
                                    d="M490.12,277.72s-40.9,73.64-82.72,88.57c-6.24,2.23-30.56.77-34.06-4.81-19.48-31.13,17.58-95.92,17.58-95.92l.41.18c9.8,20.46,35.14,29.15,64.23,28.78C474.09,294.28,490.12,277.72,490.12,277.72Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_2}
                                    d="M423.5,362.79c1.55-2.76-57.37,72.65-99.84,80.85-6.52,1.26-14-9.35-15.52-15.73-6.81-27.92,55.77-100.68,55.77-100.68l.38.25c1.7,20.95-3.53,33.51,14.81,42.16C395.83,377.53,423.5,362.79,423.5,362.79Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_1}
                                    d="M319.6,386.55c-6,2.18-17,20.62-16,38.37s19.25,22.93,25.45,24.43L213,422.88Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_2}
                                    d="M311.38,385.69,212,418.81S131.67,377.7,154.38,373c1.56-.32,9.57.07,21.21.87L216,391.41l-18.72-15.86C243.84,379.3,311.38,385.69,311.38,385.69Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_2}
                                    d="M263.37,166c0,30.57-14.4,53.43-24.38,53.43l-.49,0v0S83.33,176.63,75.55,143.89c-2.68-11.24-1-6.74-1-6.74,6.08,8.79,0,13.48,48.79,19.31,6.16.73,12.09,1.3,17.66,1.6-33.56-6.13-51.85-14.17-58.66-21.87a1.51,1.51,0,0,1-.3-.49L238.5,108.75v0l.49,0C251.56,108.75,263.37,135.46,263.37,166Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <ellipse
                                    className={styles.cls_3}
                                    cx="147.43"
                                    cy="109.18"
                                    rx="7.79"
                                    ry="7.7"
                                />
                                <path
                                    className={styles.cls_4}
                                    d="M151.14,153.3a5.56,5.56,0,0,0-1.61.15,5,5,0,0,0-4.07,5.85l.2.82a2.85,2.85,0,0,1-.89-1.73,4.49,4.49,0,0,1,3.38-5.41A4.54,4.54,0,0,1,151.14,153.3Z"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M264.79,220.7A111.08,111.08,0,0,1,243.38,254a146.35,146.35,0,0,1-39,30"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M276.6,219.56a110.3,110.3,0,0,1-8,38.64A144.66,144.66,0,0,1,243,300"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M291.87,219.86a110.22,110.22,0,0,1-.17,39.44,144.12,144.12,0,0,1-16.85,45.93"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M308.83,219.59A110,110,0,0,1,313,258.82a143.58,143.58,0,0,1-11.75,47.45"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M345.8,221.46c-2.14.61-11.3,3.47-16,12.41a23.41,23.41,0,0,0-2.6,9.28"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M363.87,222.55c-2.12.67-11.19,3.78-15.64,12.84a23.42,23.42,0,0,0-2.33,9.35"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M383.75,223.94c-2.17.46-11.5,2.7-16.8,11.3a23.46,23.46,0,0,0-3.23,9.09"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M362.13,247.06"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M377.56,223.08"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M395,237.16c-2.22.12-11.79.88-18.39,8.55a23.35,23.35,0,0,0-4.63,8.47"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_5}
                                    d="M396.59,258.43c-2.21-.27-11.76-1.2-19.63,5.19a23.55,23.55,0,0,0-6.07,7.52"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_6}
                                    d="M78.05,148c-38.26-8.2-49.45-9.85-65.31-27.89-3.3-3.75-13.3-21.59-4.67-36.09C18,67.32,46.7,66.24,52.86,66c25.47-1,53.43-5.51,100.17,19.2,23.25,12.3,42.21,11.12,64.89,14.41a132.62,132.62,0,0,0,37.32,0"
                                    transform="translate(-3.14 -49.15)"
                                />
                                <path
                                    className={styles.cls_6}
                                    d="M75.37,141.63c-38.31-14-38.31-14-57.63-33.32C14.12,104.69,5,84.87,13.27,69.14c9.54-18.16,32.1-16.28,38-16.53,24.38-1,43.47-8.49,96.84,14.74,26.33,11.45,39.42,8,61.13,11.56,14.65,2.41,27.21,3.38,35.72,2"
                                    transform="translate(-3.14 -49.15)"
                                />
                            </svg>
                            <r>Sanjit1</r>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={linksStyle}>
                            <r>About</r>
                        </a>
                    </Link>
                    <Link href="/portfolio">
                        <a className={linksStyle}>
                            <r>Portfolio</r>
                        </a>
                    </Link>
                    <r className={wvStyle}> ✲´*。.❄¨¯`*✲。❄。*。¨¯`*✲ </r>
                    <Link href="/Music">
                        <a className={linksStyle}>
                            <r>Music</r>
                        </a>
                    </Link>
                    <Link href="/TV">
                        <a className={linksStyle}>
                            <r>TV</r>
                        </a>
                    </Link>
                    <Link href="/Misc">
                        <a className={linksStyle}>
                            <r>Misc</r>
                        </a>
                    </Link>
                    <a>
                        <i
                            className={"fa fa-bars" + " " + styles.bars}
                            onClick={() => {
                                setNavToggled(!navToggled);
                            }}
                        ></i>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
