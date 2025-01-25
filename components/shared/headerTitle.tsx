import React from 'react'


interface HeaderTitleProps {
    title: string;
    button: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, button }) => {
    return (

        <div className="flex items-center justify-between">
            <h2 className="text-base font-bold md:text-lg text-white">{title}</h2>
            <button className="text-white text-sm md:text-base text-muted-foreground font-bold cursor-pointer hover:underline">{button}</button>
        </div>
    )
}

export default HeaderTitle