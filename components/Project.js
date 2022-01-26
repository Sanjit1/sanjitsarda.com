import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { project, title, description } from "./styles/Project.module.css";

/**
 * props: project
 *      name
 *      description
 *      src(for image)
 *      dates(not yet)
 *      link(a link for the project: repo/site/page etc)
 */

function Project(props) {
    const divRed = useRef(null);

    var highlight = () => {
        anime({
            targets: divRed.current,
            boxShadow: "0px 0px 28px 4px rgba(164,255,46,0.9)",
            duration: 0,
        });
    };

    var unhighlight = () => {
        anime({
            targets: divRed.current,
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
            duration: 0,
        });
    };

    return (
        <>
            <div
                ref={divRed}
                onMouseOver={highlight}
                onMouseLeave={unhighlight}
                className={project}
            >
                <h4 className={title}>{props.name}</h4>
                <p className={description}>{props.description}</p>
                <Image src={props.src} width={5000} height={5000} />
                <br />
                <Link href={props.link}>
                    <a style={{ float: "right" }}>
                        <em>See more...</em>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Project;
