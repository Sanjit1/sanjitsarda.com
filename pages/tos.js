import Head from "next/head";

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>Error 404</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1>Terms of Service</h1>
            <p>
                Contact me at sanjitsarda4@gmail.com
                <br />
                Long story short, you have no rights on this website(other than
                those guaranteed by the constitution of the United States of
                America(maybe)). If there is a serious/legal issue contact me.
            </p>
        </div>
    );
}
