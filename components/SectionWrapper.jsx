const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-20 md:py-24 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper