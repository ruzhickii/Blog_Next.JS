import Document, { Head, Main, NextScript } from 'next/document'

const body = {
    margin: 0
};

export default class MyDocument extends Document {
    render () {
        return (
            <html>
            <Head>
                <title>My page</title>
            </Head>
            <body style={body}>
            <div className='root'>
                <Main />
            </div>
            <NextScript />
            </body>
            </html>
        )
    }
}