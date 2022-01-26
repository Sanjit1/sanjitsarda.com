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
            <h1>A 404 Page</h1>
            <p>You be lost fam.</p>
        </div>
    );
}
