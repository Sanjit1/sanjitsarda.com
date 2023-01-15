import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./styles/Card.module.scss";

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

    const mainCard = (
        <div
            ref={divRed}
            style={props.style}
            className={
                styles.card + " " + (props.yellow ? styles.yellow : styles.red)
            }
        >
            <Link href={props.link}>
                <h3 className={styles.title}>{props.name}</h3>
            </Link>

            <p className={styles.description}>{props.description}</p>
            <Image
                // ref={img}
                alt={props.name}
                className={styles.image}
                src={props.src}
                width={5000}
                height={5000}
            />
            <br />
        </div>
    );

    return props.linked ? (
        <Link style={{ cursor: "pointer" }} href={props.link}>
            {mainCard}
        </Link>
    ) : (
        mainCard
    );
}

export default Card;
