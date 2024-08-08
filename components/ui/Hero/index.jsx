import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-20 text-gray-600">
            <div className="flex max-w-5xl mx-auto">
                {/* Columna izquierda (60%) */}
                <div className="w-full md:w-3/5 text-center md:text-left space-y-5">
                    <h1 className="text-4xl text-gray-950 font-bold mx-auto sm:text-6xl">
                        Triunfa con tu tesis, TFG o TFM sin complicaciones
                    </h1>
                    <p className="max-w-xl mx-auto md:mx-0">
                        Tesis a la Carta hace que sea simple para ti aprobar tus proyectos académicos con asesoría experta y redacción profesional
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-x-3 font-medium text-sm">
                        <NavLink
                            href="/get-started"
                            className="text-white bg-orange-800 hover:bg-orange-600 active:bg-orange-900"
                        >
                            Solicita hoy mismo
                        </NavLink>
                        <NavLink
                            href="#cta"
                            className="text-gray-700 border hover:bg-gray-50"
                            scroll={false}
                        >
                            Leer Más
                        </NavLink>
                    </div>
                </div>
                {/* Columna derecha (40%) */}
                <div className="hidden md:block md:w-2/5">
                    <img
                        src="./img/graduada01.jpeg"
                        alt="Graduada"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    </section>
)

export default Hero
