import Head from "next/head";
import styles from "./../components/styles/Home.module.css";
import Link from "next/link";
import Card from "../components/Card";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sanjit1</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>Home?</h1>
            <p>
                Well, well, well, What do you we have here? This is a website
                where you can do stuff. Have fun!
                <br />
                <br />
                <Card
                    name="15 Puzzle"
                    description="A 15 Puzzle Game with a few varients"
                    src="https://raw.githubusercontent.com/Sanjit1/sanjitsarda.com/main/pages/portfolio/assets/15puzzle.png"
                    link="https://games.sanjitsarda.com/15puzzle"
                    properties={{
                        language: ["JS"],
                        tools: ["React.js", "Next.js"],
                        platform: ["RPi"],
                        types: ["Bored"],
                    }}
                />
                <br />
                <img
                    src="https://i.chzbgr.com/full/9651115008/hD9A0E6C7/animal"
                    alt="Frogs"
                    width={500}
                    className={styles.frogs}
                />
                <br />
                Just an image of frogs I felt like adding.
            </p>
        </div>
    );
}
