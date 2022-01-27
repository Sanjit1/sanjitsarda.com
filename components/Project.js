import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import {
    project,
    title,
    description,
    image,
} from "./styles/Project.module.css";

/**
 * props: project
 *      name
 *      description
 *      src(for image)
 *      dates(not yet)
 *      link(a link for the project: repo/site/page etc)
 *      tags: Web Dev, Js, Python, Java, Arduino, IoT, cloud, discord,
 */

function Project(props) {
    const divRed = useRef(null);
    const img = useRef(null);

    return (
        <>
            <div ref={divRed} className={project}>
                <h3 className={title}>{props.name}</h3>
                <p className={description}>{props.description}</p>
                <Image
                    ref={img}
                    className={image}
                    src={props.src}
                    width={5000}
                    height={5000}
                />
                <br />
                <Link href={props.link}>
                    <a style={{ float: "right" }} target="_blank">
                        <em>See more...</em>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Project;
