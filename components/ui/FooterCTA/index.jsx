import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper className="bg-gradient-to-r from-gray-950 via-gray-700 to-orange-600 py-10">
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-white text-3xl font-semibold sm:text-4xl">
                    Empieza con Tesis a la Carta hoy mismo
                </h2>
                <p className="mt-3 text-white">
                    Contrata a expertos para redactar y asesorar tu tesis, TFG o TFM, sigue las mejores prácticas, elimina obstáculos y entrega tu proyecto a tiempo.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-orange-800 hover:bg-orange-600 active:bg-orange-900"
                >
                    Haz tu pedido
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA