import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import enfoquePersonalizado from "../../../public/icons/enfoquePersonalizado.svg"
import analisisExhaustivo from "../../../public/icons/analisisExhaustivo.svg"
import redaccionProfesional from "../../../public/icons/redaccionProfesional.svg"
import revisionCorreccion from "../../../public/icons/revisionCorreccion.svg"
import comunicacionContinua from "../../../public/icons/comunicacionContinua.svg"
import entregaPuntual from "../../../public/icons/entregaPuntual.svg"

const ToolKit = () => {

    const features = [
        {
            icon: enfoquePersonalizado,
            title: "Enfoque Personalizado",
            desc: "Cada proyecto es único. Nos tomamos el tiempo para entender tus necesidades y adaptar nuestra asesoría a tus requerimientos específicos."
        },
        {
            icon: analisisExhaustivo,
            title: "Análisis Exhaustivo",
            desc: "Realizamos un análisis detallado de los requisitos de tu tesis, TFG o TFM, para garantizar que cada aspecto cumpla con los estándares académicos."
        },
        {
            icon: redaccionProfesional,
            title: "Redacción Profesional",
            desc: "Nuestros expertos se encargan de la redacción y edición, aplicando las normas APA, Iso y Vancouver para asegurar precisión y calidad en el contenido."
        },
        {
            icon: revisionCorreccion,
            title: "Revisión y Corrección",
            desc: "Implementamos un proceso riguroso de revisión y corrección para eliminar errores y perfeccionar el texto final."
        },
        {
            icon: comunicacionContinua,
            title: "Comunicación Continua",
            desc: "Mantenemos una comunicación constante contigo para asegurarnos de que el proyecto evolucione según tus expectativas y resolver cualquier duda en el camino."
        },
        {
            icon: entregaPuntual,
            title: "Entrega Puntual",
            desc: "Nos comprometemos a cumplir con los plazos establecidos para que puedas presentar tu trabajo con confianza y sin estrés."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        La metodología de nuestro servicio
                    </h2>
                    <p>
                        Descubre cómo trabajamos para asegurar el éxito de tu proyecto académico
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit