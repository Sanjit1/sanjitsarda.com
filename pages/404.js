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
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content="404 Page of Sanjit Sarda's website: I do not know why I am indexing this."
                />
            </Head>
            <h1>A 404 Page</h1>
            <p>You be lost fam.</p>
        </div>
    );
}
