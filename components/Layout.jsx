import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Tesis a la Carta</title>
                <meta name='description' content='En Tesis a la Carta brindamos asesoría en tesis, trabajos académicos a demás hacemos correcciones, redacciones, TFM, TFG, presentaciones y clases virtuales' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout