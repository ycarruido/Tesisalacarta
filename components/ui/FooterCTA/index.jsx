import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper className="py-0">
        <div className="custom-screen">
            <div className="max-w-4xl mx-auto text-center rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-accent to-slate-700 px-8 py-12 shadow-lg shadow-brand-accent/20">
                <h2 className="text-white text-3xl font-bold tracking-tight sm:text-4xl">
                    Empieza con Tesis a la Carta hoy mismo
                </h2>
                <p className="mt-3 text-slate-100">
                    Contrata a expertos para redactar y asesorar tu tesis, TFG o TFM, sigue las mejores prácticas, elimina obstáculos y entrega tu proyecto a tiempo.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-5 inline-block font-medium text-sm text-brand-accent bg-white hover:bg-slate-100 active:bg-slate-200"
                >
                    Haz tu pedido
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA