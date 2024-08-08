import SectionWrapper from "../../SectionWrapper"

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Dylan Moreno",
            title: "Lic.",
            quote: "No tenía idea de cómo empezar, no sabía ni qué hacer, con la ayuda de «Tesisalacarta» pude contratar el TFG, PPT + asesoría y todo quedó perfecto"
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Monica Sanchez",
            title: "Lda.",
            quote: "Pasé los días con estrés, no podía concentrarme ni dormir bien, solicité ayuda y en 30 días tenía mi trabajo terminado, aparte son muy discretos y puntuales."
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Oriana Gómez",
            title: "Ingeniero en Sistemas",
            quote: "Mi tutor me hizo muchísimas correcciones, me las hicieron todas en tiempo récord y pude defender sin problemas."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Laura Fernández",
            title: "Graduada en Administración",
            quote: "Mi experiencia con Tesisalacarta fue excelente. Pasé por un periodo muy complicado y no sabía cómo avanzar con mi TFM. En menos de un mes, no solo completé mi proyecto, sino que también recibí asesoría valiosa que realmente hizo la diferencia. La puntualidad y la confidencialidad son dignas de mención."
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Javier Pérez",
            title: "Ingeniero en Telecomunicaciones",
            quote: "Me encontré con muchos desafíos durante la preparación de mi tesis, pero el equipo de TAC manejó cada uno de ellos con gran profesionalismo. Realizaron todas las correcciones necesarias y me ayudaron a defender mi trabajo con éxito. Muy agradecido por su dedicación y rapidez."
        },
        {
            avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Carlos Ramírez",
            title: "Estudiante de Ciencias Sociales",
            quote: "Siempre me sentí abrumado con la cantidad de trabajo y no sabía por dónde empezar. Gracias al equipo de Tesisalacarta, no solo obtuve un TFG impecable, sino también una presentación que superó mis expectativas. El soporte y la atención al detalle fueron excepcionales."
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Mira lo que dicen sobre nosotros
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Es importante que sepas que el servicio es confidencial, por lo que resguardamos tu identidad, así como también la de los docentes que trabajan con nosotros
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials