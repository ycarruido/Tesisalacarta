import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/img/presentacion.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta">
            <div className="custom-screen">
                <div className="items-center gap-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:flex lg:p-10">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-2xl md:max-w-lg border border-slate-100" alt="Asesoria academica premium para tesis" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                            Acompanamiento estrategico
                        </p>
                        <h2 className="mt-3 text-brand-accent text-3xl font-bold tracking-tight sm:text-4xl">
                            Alcanza el éxito académico con nuestra asesoría especializada
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            En Tesisalacarta, nos dedicamos a apoyar tu éxito académico ofreciendo servicios personalizados para tesis, TFG, TFM, presentaciones, asesorías, charlas, clases virtuales. Trabajamos estrechamente contigo para entender tus necesidades y desafíos, asegurando que cada aspecto de tu proyecto esté perfectamente alineado con los requisitos académicos. Valoramos la colaboración transparente y te animamos a participar activamente en cada etapa del desarrollo de tu trabajo.   
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-5 font-medium text-sm text-white bg-brand-accent hover:opacity-95 active:opacity-90"
                        >
                            Solicita hoy mismo
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA