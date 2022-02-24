import Head from "next/head";
import Link from "next/link";
import Project from "../../components/Project";
import ProjectHolder from "../../components/ProjectHolder";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>Portfolio</h1>
            <p>
                Hi. If you want to look at some of the work on things Here are
                some of the things I have worked on and stuff. I do not like
                featuring small projects, so you will find <em>some</em> of them
                here: If I showcase a tiny project here, it is probably because
                I use it a ton or I find it significant for some other reason.
                You might find <em>some</em> of my other projects on my{" "}
                <Link href="https://github.com/Sanjit1">
                    <a>GitHub</a>
                </Link>
                , but I keep most of my personal projects private. I don't have
                everything on there, so if you want to know about some of my
                projects, feel free to email me!
            </p>
            <ProjectHolder>
                <Project
                    name="Wizard Mirror"
                    description="An open source Smart Mirror for Raspberry Pi (v1 :p)."
                    src="https://github.com/Sanjit1/WizardMirror/raw/master/logo.png"
                    link="https://github.com/Sanjit1/WizardMirror"
                />
                <Project
                    name="Control my lights"
                    description="A discord bot that lets you control my lights."
                    src="https://www.assets.signify.com/is/image/PhilipsLighting/154cd4be13fb4ce0b946ac6700e5b917"
                    link="https://github.com/Sanjit1/control-my-lights#control-my-lights"
                />
                <Project
                    name="FRC Scouter"
                    description="A scouting app for FRC(that I think could probably be used for other sports too) that I made in 2019(My icon making skills have significantly improved)."
                    src="https://raw.githubusercontent.com/Sanjit1/FRCScouter/master/app/src/main/ic_launcher-web.png"
                    link="https://github.com/Sanjit1/FRCScouter"
                />
                <Project
                    name="Thermistor Calibrator"
                    description="A Thermistor Calibrator I made for Science Olympiad in 2019, since online calibration was not allowed for an event: Detector Building."
                    src="https://github.com/Sanjit1/CalibratorJava/raw/master/app.png"
                    link="https://github.com/Sanjit1/"
                />
                <Project
                    name="sanjitsarda.com"
                    description="A website I made because I could. Yea its this one."
                    src="https://github.com/Sanjit1/sanjitsarda.com/raw/main/pages/portfolio/assets/sswss.png"
                    link="/about"
                />
                <Project
                    name="Laptop Charger"
                    description="LaptopCharger😕(apparently thats supposed to be the confused emoji). 
                    A very tiny script that toggles an MQTT device that toggles my LaptopCharger based on how necessary it is.
                    Why did I make this? - time for story time with Sanjit(I hope you realize that I am not boasting about
                    a simple thingie, but I dont have an image lol and I really need to fill this space). 
                    For a computer person, I have not taken much good care of my computer. At some point 
                    in time, my battery started lasting 1 hour, then 30 mins, and then school was going back in person
                    so I needed a laptop that would not die, and got the battery replaced. I realized that my laptop was old enough
                    to take care of itself, so I gave it a set of instructions: telling it to charge my laptop when there is not enough charge
                    and stop charging it when its enough."
                    src="https://github.com/Sanjit1/sanjitsarda.com/raw/main/public/sswss.png"
                    link="https://github.com/Sanjit1/LaptopCharger"
                />
                <Project
                    name=" ​ "
                    description=" ​ "
                    src="https://github.com/Sanjit1/sanjitsarda.com/raw/main/public/sswss.png"
                    link="https://www.youtube.com/watch?v=wUcUTXWu1fI"
                />
                <Project
                    name="Discord Communications"
                    description="This is a(probably very slow) communication library that uses discord to communicate between
                    clients. Its not supposed to make sense or be useful but it is very fun to look at and stuff, so why not. 
                    Obviously don't use this library if you expect lots of traffic, since it is very slow."
                    src="https://camo.githubusercontent.com/68ed32620b4b09ff3305c01daa5ae0cbc63f974a3766e2cbb89c024c8ce241db/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835373733393633363835303535363934382f3835383436343233313435353332363232392f756e6b6e6f776e2e706e67"
                    link="https://github.com/Sanjit1/discord-communications#readme"
                />
                <Project
                    name=" ​ "
                    description=" ​ "
                    src="https://github.com/Sanjit1/sanjitsarda.com/raw/main/public/sswss.png"
                    link="https://www.youtube.com/watch?v=wUcUTXWu1fI"
                />
            </ProjectHolder>
        </div>
    );
}
