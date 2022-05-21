import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { card, title, description, image } from "./styles/Card.module.css";

/**
 * props: Card
 *      name
 *      description
 *      src(for image)
 *      link(a link for the project: repo/site/page etc)
 */

function Card(props) {
    const divRed = useRef(null);
    const img = useRef(null);

    return (
        <>
            <div ref={divRed} className={card}>
                <Link href={props.link}>
                    <h3 className={title}>{props.name}</h3>
                </Link>

                <p className={description}>{props.description}</p>
                <Image
                    ref={img}
                    className={image}
                    src={props.src}
                    width={5000}
                    height={5000}
                />
                <br />
            </div>
        </>
    );
}

export default Card;
