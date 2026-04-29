import SectionWrapper from "../../SectionWrapper"

const Services = () => {

    const services = [
        {
            icon: "TFG",
            title: "Trabajo Final de Grado (TFG)",
            desc: "Es un proyecto de investigación con una tesina final de los Grados universitarios"
        },
        {
            icon: "TFM",
            title: "Trabajo Final de Master (TFM)",
            desc: "Requisito imprescindible para obtener un título de posgrado."
        },
        {
            icon: "1:1",
            title: "Asesorías / Charlas / Clases virtuales",
            desc: "Acompañamos y apoyamos pedagógicamente a los estudiantes."
        },
        {
            icon: "DOC",
            title: "Redacción",
            desc: "Ofrecemos servicios de redacción de alta calidad adaptados a tus necesidades."
        }
        ,
        {
            icon: "PPT",
            title: "Presentaciones",
            desc: "Diseñamos tus presentaciones para la defensa de tu grado, diseños originales y guión de estudios."
        }
    ]

    return (
        <SectionWrapper>
            <div id="services" className="custom-screen text-slate-600">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                        Servicios premium
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-accent">
                        Estos son los servicios reales que ofrecemos en Tesis a la Carta
                    </h2>
                </div>
                <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                    Soluciones academicas especializadas para cada etapa: desde el enfoque inicial hasta la defensa final.
                </p>
                <div className="mt-8 h-1 w-14 rounded-full bg-brand-gold/80" />
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((item, idx) => (
                            <li key={idx} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
                                <div className="w-12 h-12 border border-brand-primary/30 bg-brand-soft text-brand-accent rounded-xl flex items-center justify-center text-xs font-bold tracking-tight">
                                    {item.icon}
                                </div>
                                <h4 className="mt-5 text-lg text-brand-accent font-bold tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Services