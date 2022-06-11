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
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content="About Page of Sanjit Sarda's website: I do not know why I am indexing this."
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
                <br />
                <h3>About Sanjit</h3>
                I am a human. There are three reasons you could be here.
                <br />
                <ol>
                    <li>
                        You found this site and felt like clicking on the about:
                        Hi bored person, I am not bored enough to tell you about
                        me yet, so wait till I'm bored. UPDATE: I am bored rn so
                        scroll down and you can read about me.
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
                        page, if I have finished working on it(which I
                        haven't!).
                    </li>
                    <li>
                        You know me, found my website and are stalking me(why
                        are you stalking me, like not in a mad way but just out
                        of curiosity i guess): Hi. Idk what to say. Hi. Bye.
                    </li>
                </ol>
                <br />
                <h3>Stuff I'm interested(as of May 2022)</h3>
                Hi. Frogs. My interests can be divided into 4 categories if you
                will.
                <h4>Music</h4>
                Okay so I have a lot of good music taste. I like(in no
                particular order tbh):
                <ul>
                    <li>Rob(and well White) Zombie</li>
                    <li>Avenged Sevenfold</li>
                    <li>Red Hot Chilli Peppers</li>
                    <li>Rammstein</li>
                    <li>Led Zeppelin</li>
                    <li>Avenged Sevenfold</li>
                    <li>System of a Down(or Serj in general)</li>
                    <li>Metallica</li>
                    <li>Godsmack(kinda: i mean they aren't bad but yea)</li>
                    <li>Lamb of God</li>
                    <li>Avenged Sevenfold</li>
                    <li>Ozzy(also not really it kinda depends on the day)</li>
                    <li>Pantera</li>
                    <li>Peter Steele</li>
                </ul>
                Im considering being bored af over the summer and dedicate a
                bunch of web pages to music. Maybe, Maybe not.
                <h4>Movies and TV</h4>
                Okay so my main stuff is DCTV. Lets see
                <ul>
                    My favorite DCTV shows in order
                    <li>
                        Stargirl: Probably not everyone's first choice. But omg
                        oh my gosh this show is FREAKIN AMAZIN.
                    </li>
                    <li>
                        Smallville: Its the best Superman origin story ever.
                        Except for when they ran out of ideas in like season 6.
                        It still ended on a strong note!
                    </li>
                    <li>
                        The Flash: Yea this show is awesome thats all I need to
                        say about it lol.
                    </li>
                    <li>
                        Superman and Lois: Its almost like the sequel to
                        Smallville, so that makes it kinda fun. Other than that,
                        it throws the biggest curveballs and makes me crazy.
                        So... yea fun.
                    </li>
                    <li>
                        Arrow: Don't need to say anything this show is so great.
                        Season 2 is approximately the best arrowverse season
                        ever.(I will need to rewatch stargirl a bit to decide
                        for sure)
                    </li>
                    <li>Titans: its different. Its cool. I hate Jason Todd.</li>
                    <li>
                        Naomi: Its a cool show, would have liked to see it play
                        out, but it will probably get canceled cuz money stuff.
                    </li>
                    <li>
                        Young Justice: I will be honest I do not pay much
                        attention to the show but it is a lot of fun to watch.
                    </li>
                    <li>
                        {" "}
                        Legends of Tmrw: Season 3 and Season 4 was great went
                        downhill after that. Still sad it got canceled.
                    </li>
                    <li>Lucifer: Was good till netflix took it but yea.</li>
                    <br />
                    Stuff I still have to watch:
                    <li>iZombie</li>
                    <li>Doom Patrol</li>
                    <li>Pennyworth</li>
                    <li>Gotham</li>
                </ul>
                <h4>Nerdy Stuff</h4>
                <li>Ill do this later</li>
                <h4>Misc</h4>
                Ok so I like frogs, 15puzzle, frogs and shrimp and fish and
                frogs and kermit. Yea again I got lazy so it might be a while
                till I update this . Frog
            </p>
        </div>
    );
}
