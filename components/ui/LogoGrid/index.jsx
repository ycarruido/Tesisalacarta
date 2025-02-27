import Image from 'next/image'
import apa from '../../../public/logos/apa.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import layers from '../../../public/logos/layers.svg'
import adobe from '../../../public/logos/adobe.svg'

const logos = [
    {
        src: apa,
        alt: "apa"
    },
    {
        src: sendgrid,
        alt: "sendgrid"
    },
    {
        src: layers,
        alt: "layers"
    },
    {
        src: adobe,
        alt: "adobe"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-mb text-gray-600 text-center">
                NORMAS APLICADAS
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid