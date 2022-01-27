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
                on my{" "}
                <Link href="https://github.com/Sanjit1">
                    <a>GitHub</a>
                </Link>
                . I don't have everything on there, so if you want to know about
                some of my projects, feel free to email me!
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
                    description="A website I made because I could"
                    src="/public/sswss.png"
                    link="/about"
                />
            </ProjectHolder>
        </div>
    );
}
