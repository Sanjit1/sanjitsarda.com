import Head from "next/head";
import styles from "./../components/styles/Home.module.css";

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
                Ok. So this is a website. It does website stuff. Ok so heres the
                thing. I'm watching TV so I'm kinda distracted. Lets try this
                again. This site does things. Right now there isn't much but im
                adding cool stuff over the summer.
                <br />
                Oky byeeee. Ill update this place later if I feel like it.
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
