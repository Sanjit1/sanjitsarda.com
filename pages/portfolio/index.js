import Head from "next/head";
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
                some of the things I have worked on and stuff.
                <Project
                    name="Name"
                    description="Description"
                    src="../../public/favicon.ico"
                    link="https://github.com/Sanjit1/"
                />
            </p>
        </div>
    );
}
