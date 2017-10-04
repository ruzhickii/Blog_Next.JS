import Document, { Head, Main, NextScript } from 'next/document';

const body = {
    margin: 0
};

export default class MyDocument extends Document {
    render () {
        return (
            <html>
                <Head>
                    <title>My page</title>
                    <link href='/static/styles.css' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css?family=Open+Sans:700' rel='stylesheet' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                </Head>
                <body style={body}>
                    <div className='root'>
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }
}
