import React, { useEffect } from 'react'
import './ProjectSmallCard.css'


interface ProjectSmallCardProps {
    tech: string;
}
function ProjectSmallCard({ tech }: ProjectSmallCardProps) {

    return (
        <>
            <div className='project__small-card'>
                {tech}
            </div>
        </>
    )
}

export default ProjectSmallCard