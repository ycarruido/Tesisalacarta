import Head from "next/head";
import Link from "next/link";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Services from "../components/ui/Services";
import CTA from "../components/ui/CTA";
import FooterCTA from "../components/ui/FooterCTA";

const testimonials = [
  {
    name: "Mariana R.",
    text: "Pase de estar bloqueada a presentar mi tesis con seguridad. El proceso fue claro y profesional.",
  },
  {
    name: "Luis F.",
    text: "La redaccion y la estructura mejoraron por completo. El resultado fue de nivel academico alto.",
  },
  {
    name: "Daniela P.",
    text: "Me guiaron paso a paso y pude defender sin estres. Se nota el enfoque premium del servicio.",
  },
];

const servicesItems = [
  "Trabajo Final de Grado (TFG)",
  "Trabajo Final de Master (TFM)",
  "Asesorias / Charlas / Clases virtuales",
  "Redaccion",
  "Presentaciones",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayuda con mi tesis | Redaccion de tesis profesional</title>
        <meta
          name='description'
          content='Recibe ayuda con tu tesis de forma personalizada: asesoria academica, estructura, metodologia y redaccion de tesis profesional para avanzar con confianza y resultados.'
        />
        <meta
          property='og:title'
          content='Ayuda con mi tesis | Redaccion de tesis profesional'
        />
        <meta
          property='og:description'
          content='Recibe ayuda con tu tesis de forma personalizada: asesoria academica, estructura, metodologia y redaccion de tesis profesional para avanzar con confianza y resultados.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta
          name='twitter:card'
          content='summary'
        />
        <meta
          name='twitter:title'
          content='Ayuda con mi tesis | Redaccion de tesis profesional'
        />
        <meta
          name='twitter:description'
          content='Recibe ayuda con tu tesis de forma personalizada: asesoria academica, estructura, metodologia y redaccion de tesis profesional para avanzar con confianza y resultados.'
        />
        <meta name='robots' content='index' />
      </Head>
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50 pointer-events-none' />
        <div className='custom-screen relative py-24 md:py-32'>
          <div className='mx-auto max-w-4xl text-center'>
            <span className='inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 shadow-sm'>
              EdTech premium para tesis universitarias
            </span>
            <h1 className='mt-8 text-5xl md:text-7xl font-bold tracking-tight text-brand-accent'>
              Tu Tesis, Perfecta.
              <br />
              Sin Estres.
            </h1>
            <p className='mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed'>
              Acompanamiento academico de lujo para quienes quieren resultados reales:
              asesoria especializada, redaccion profesional y defensa impecable.
            </p>
            <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-3'>
              <Link
                href='/get-started'
                className='inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-accent to-slate-700 shadow-lg shadow-brand-accent/20 transition-all duration-300 hover:opacity-95'
              >
                Empezar ahora
              </Link>
              <Link
                href='#services'
                className='inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-semibold text-brand-accent border border-slate-200 bg-white transition-all duration-300 hover:shadow-sm'
                scroll={false}
              >
                Ver servicios
              </Link>
            </div>
            <div className='mt-8 flex items-center justify-center gap-2 text-sm text-slate-500'>
              <span className='text-brand-gold'>★★★★★</span>
              <span>Asesoria top valorada por estudiantes de grado y master</span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='custom-screen'>
          <div className='mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {[
              ["+500", "proyectos academicos apoyados"],
              ["96%", "clientes que recomiendan el servicio"],
              ["1:1", "acompanamiento experto y personalizado"],
            ].map(([value, label]) => (
              <div key={value} className='rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm'>
                <p className='text-3xl font-bold tracking-tight text-brand-accent'>{value}</p>
                <p className='mt-1 text-sm text-slate-500'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <CTA />

      <section id='testimonials' className='pb-24'>
        <div className='custom-screen'>
          <div className='rounded-3xl border border-slate-100 bg-white p-8 md:p-12 shadow-sm'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-brand-accent'>
              Confianza construida con resultados
            </h2>
            <div className='mt-8 grid gap-4 md:grid-cols-3'>
              {testimonials.map((item) => (
                <figure key={item.name} className='rounded-2xl border border-slate-100 bg-slate-50 p-5'>
                  <p className='text-sm leading-relaxed text-slate-600'>"{item.text}"</p>
                  <figcaption className='mt-4 text-sm font-semibold text-brand-accent'>
                    {item.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='contacto' className='pb-24'>
        <div className='custom-screen'>
          <div className='rounded-3xl border border-slate-100 bg-white p-8 md:p-12 shadow-sm'>
            <div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
              <div>
                <p className='text-sm font-semibold tracking-wide text-slate-500 uppercase'>
                  Contacto
                </p>
                <h2 className='mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-accent'>
                  Habla con un experto y recibe una orientacion clara para tu tesis
                </h2>
                <p className='mt-4 text-slate-600 leading-relaxed'>
                  Cuentanos en que etapa estas y te ayudamos a definir el mejor camino
                  para avanzar con seguridad.
                </p>
                <div className='mt-6 flex items-center gap-2 text-sm text-slate-500'>
                  <span className='text-brand-gold'>★★★★★</span>
                  <span>Respuesta rapida y atencion personalizada</span>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className='space-y-4'>
                <div>
                  <label className='text-sm font-medium text-brand-accent'>Nombre</label>
                  <Input
                    aria-label='Nombre'
                    type='text'
                    required
                    className='mt-2 border-slate-200 text-slate-700 focus:border-brand-accent'
                  />
                </div>
                <div>
                  <label className='text-sm font-medium text-brand-accent'>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 border-slate-200 text-slate-700 focus:border-brand-accent'
                  />
                </div>
                <div>
                  <label className='text-sm font-medium text-brand-accent'>Mensaje</label>
                  <textarea
                    aria-label='Mensaje'
                    required
                    className='w-full mt-2 h-32 px-3 py-2 resize-none bg-transparent outline-none border border-slate-200 text-slate-700 focus:border-brand-accent shadow-sm rounded-lg transition-all duration-300'
                  />
                </div>
                <div>
                  <label className='text-sm font-medium text-brand-accent'>
                    Servicio de interes
                  </label>
                  <ul className='mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex items-center gap-2'>
                        <Checkbox id={`service-${idx}`} className='text-brand-accent' />
                        <label htmlFor={`service-${idx}`} className='text-sm text-slate-600'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className='w-full text-white bg-brand-accent hover:opacity-95 shadow-lg shadow-brand-accent/20'>
                  Enviar solicitud
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
