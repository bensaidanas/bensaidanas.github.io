import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string
    id?: string
}

const Section: React.FC<SectionProps> = ({children, className, id}) => {
    return (
        <section id={id} className={`min-h-screen w-full ${className}`}>
            {children}    
        </section>
    )
}

export default Section