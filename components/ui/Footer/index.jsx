const socialInfo = [
    {
        icon: <svg className="w-6 h-6 hover:text-brand-primary duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>,
        href: "https://instagram.com/tesisalacarta",
        label: "Instagram Tesis a la Carta"
    },
    {
        icon: <svg className="w-6 h-6 hover:text-brand-primary duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>,
        href: "#"
    },
    {
        icon: <svg className="w-6 h-6 hover:text-brand-primary duration-150" fill="none" viewBox="0 0 28 28"><g clipPath="url(#clip0_1213_3074)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z" /></g><defs><clipPath id="clip0_1213_3074"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>,
        href: "#"
    },
]

const Footer = () => (
    <footer className="mt-20 border-t border-slate-100 bg-white">
        <div className="custom-screen py-10">
            <div className="items-center justify-between sm:flex">
                <p className="text-sm text-slate-500">© 2026 Tesis a la Carta. Todos los derechos reservados.</p>
                <div className="flex items-center gap-x-6 text-slate-400 mt-6">
                    {
                        socialInfo.map((item, idx) => (
                            <a key={idx} href={item.href} aria-label={item.label || "social media"} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:text-brand-accent">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
)

export default Footer