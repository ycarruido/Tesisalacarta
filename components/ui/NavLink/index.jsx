import Link from "next/link";

const NavLink = ({ children, href, ...props }) => (
    <Link href={href} {...props} className={`py-2.5 px-5 text-center rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink