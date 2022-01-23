import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <div>
            <Head>
                <title>About stuff</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>About</h1>
            <p>
                Tis Sanjit. I'm not sure what to include here lol.
                <h3>About this website</h3>I was bored so I was like ok, ill
                make a new site. I don't yet know what is going to go in this
                website, but this will have a lot of random things. I will try
                to make random tools and games here. I wanna also add my
                portfolio: stuff I make etc and stuff cuz yea why not. Another
                thing about this website, is the font is normal size and stuff,
                so it does not look so particularly nice when there is not
                enough text in a paragraph, so sorry you had to waste your time
                reading this nonsense of a long sentence.
                <h3>About Sanjit</h3>I am a human. There are three reasons you
                could be here.
                <br />
                <ol>
                    <li>
                        You found this site and felt like clicking on the about:
                        Hi bored person, I am not bored enough to tell you about
                        me yet, so wait till I'm bored.
                    </li>
                    <li>
                        You want to hire me:{" "}
                        <em>Enter professional-esque Sanjit</em>: Ok, so this
                        website is kinda gaggy, so.... don't mind everything you
                        see. You can figure out a lot about me from my{" "}
                        <Link href="https://www.linkedin.com/in/sanjitsarda/">
                            <a>LinkedIn</a>
                        </Link>
                        . You can look through my{" "}
                        <Link href="/portfolio">
                            <a>portfolio</a>
                        </Link>{" "}
                        page, if I have finished working on it.
                    </li>
                    <li>
                        You know me, found my website and are stalking me(why
                        are you stalking me, like not in a mad way but just out
                        of curiosity i guess): Hi. Idk what to say. Hi. Bye.
                    </li>
                </ol>
            </p>
        </div>
    );
}
