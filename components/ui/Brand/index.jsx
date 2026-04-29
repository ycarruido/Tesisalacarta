import Link from "next/link";
import Image from "next/image";

const Brand = () => (
    <Link href="/" className="inline-flex items-center gap-3">
        <Image
            src="/logo-tesisalacarta.png"
            width={54}
            height={54}
            alt="Logo Tesis a la Carta"
            className="rounded-full border border-brand-primary/30 shadow-sm"
        />
        <span className="hidden sm:inline text-lg md:text-xl font-bold tracking-tight text-slate-700">
            TESIS A LA CARTA
        </span>
    </Link>
)
export default Brand    