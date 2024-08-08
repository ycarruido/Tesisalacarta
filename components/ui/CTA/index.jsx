import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/img/presentacion.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Alcanza el éxito académico con nuestra asesoría especializada
                        </h2>
                        <p className="mt-3 text-gray-600">
                            En Tesisalacarta, nos dedicamos a apoyar tu éxito académico ofreciendo servicios personalizados para tesis, TFG, TFM, presentaciones, asesorías, charlas, clases virtuales. Trabajamos estrechamente contigo para entender tus necesidades y desafíos, asegurando que cada aspecto de tu proyecto esté perfectamente alineado con los requisitos académicos. Valoramos la colaboración transparente y te animamos a participar activamente en cada etapa del desarrollo de tu trabajo.   
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-orange-800 hover:bg-orange-600 active:bg-orange-900"
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