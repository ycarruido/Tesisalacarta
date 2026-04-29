import { useEffect, useState } from "react"
import NavLink from "../NavLink"

const slides = [
    {
        badge: "Metodo guiado de alto nivel",
        title: "Asesoria experta para tesis con enfoque profesional",
        copy: "Plan de trabajo, estructura academica y acompanamiento personalizado para avanzar con seguridad en cada entrega."
    },
    {
        badge: "Redaccion premium academica",
        title: "Textos claros, solidos y listos para evaluacion",
        copy: "Transformamos ideas complejas en una redaccion de tesis consistente, elegante y alineada a normas universitarias."
    },
    {
        badge: "Preparacion para defensa",
        title: "Presentaciones editoriales que comunican autoridad",
        copy: "Diseno de diapositivas, guion argumental y simulacion de defensa para sostener tu propuesta con confianza."
    }
]

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length)
        }, 4500)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-soft via-white to-slate-50" />
            <div className="custom-screen relative py-20 md:py-28 text-slate-700">
                <div className="flex max-w-6xl mx-auto items-center gap-12">
                    <div className="w-full md:w-3/5 text-center md:text-left space-y-7">
                        <p className="inline-flex items-center rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-accent shadow-sm">
                            Diseno editorial para resultados reales
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-950 font-semibold mx-auto">
                            Triunfa con tu tesis, TFG o TFM con una imagen academica impecable
                        </h1>
                        <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-slate-600">
                            Convertimos tu proyecto en un trabajo profesional con asesoria especializada, redaccion premium y presentacion editorial de alto impacto.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-x-3 font-medium text-sm pt-2">
                            <NavLink
                                href="/get-started"
                                className="text-white bg-brand-accent hover:opacity-95 active:opacity-90"
                            >
                                Solicita hoy mismo
                            </NavLink>
                            <NavLink
                                href="#cta"
                                className="text-slate-700 border border-slate-300 bg-white hover:bg-slate-50"
                                scroll={false}
                            >
                                Leer Más
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden md:block md:w-2/5">
                        <div className="relative min-h-[360px] rounded-2xl border border-brand-primary/20 bg-white p-7 shadow-sm overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-white to-brand-soft pointer-events-none" />
                            {slides.map((slide, idx) => (
                                <article
                                    key={idx}
                                    className={`absolute inset-0 p-7 transition-all duration-500 ${activeSlide === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
                                >
                                    <div className="relative h-full flex flex-col">
                                        <span className="inline-flex w-fit rounded-full border border-brand-primary/30 bg-brand-soft px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-brand-accent">
                                            {slide.badge}
                                        </span>
                                        <h3 className="mt-6 font-serif text-3xl leading-tight text-slate-900">
                                            {slide.title}
                                        </h3>
                                        <p className="mt-4 text-slate-600 leading-relaxed">
                                            {slide.copy}
                                        </p>
                                        <div className="mt-auto pt-8 flex items-center gap-2">
                                            {slides.map((_, dotIdx) => (
                                                <button
                                                    key={dotIdx}
                                                    type="button"
                                                    onClick={() => setActiveSlide(dotIdx)}
                                                    className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === dotIdx ? "w-8 bg-brand-primary" : "w-2.5 bg-slate-300 hover:bg-brand-accent/50"}`}
                                                    aria-label={`Ver slide ${dotIdx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
