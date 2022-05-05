import Head from "next/head";

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
                    src="https://thumbs.dreamstime.com/b/mating-frogs-couple-probably-rana-temporaria-common-frog-sunny-spring-day-111343718.jpg"
                    alt="Frogs"
                    width={500}
                />
                <br />
                Just an image of frogs I felt like adding.
            </p>
        </div>
    );
}
