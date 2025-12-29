import Link from 'next/link'

export default function Banner() {
    const bg = `url('/images/Banner.jpg')`
    return (
        <section className="banner" style={{ backgroundImage: bg }}>
            <div className="banner-overlay">
                <div className="container banner-inner">
                    <h2>Harsha PJ</h2>
                    <p>Front End Developer [React JS]</p>
                    <p>Experienced Front-end developer with over 8+ years in the tech industry, adept at crafting, deploying, and
                        optimizing top-tier web applications utilizing React JS, JavaScript, TypeScript, HTML5, CSS3, and Redux. Proficient
                        in UI design principles, with a knack for creating engaging user experiences. Possessing strong problem-solving
                        abilities and analytical skills, I thrive in dynamic environments that offer opportunities for skill enhancement and
                        professional growth.<br></br>
                        My expertise extends to SharePoint, AJAX, REST API integration, jQuery, Azure DevOps, and Git for version control.
                        I'm well-versed in Bootstrap for responsive design, proficient in Photoshop for graphic editing, and familiar with
                        Material-UI (Mui) for enhanced UI components. Additionally, I have a foundational understanding of MS SQL and
                        MongoDB for database management.<br></br>
                        In addition to core web development technologies, I have a basic understanding of ES6, React Native, SAGA for
                        state management, and Adobe Premiere Pro for video editing. I'm committed to delivering high-quality solutions
                        while continuously expanding my skill set to stay ahead in the ever-evolving tech landscape.</p>
                    {/* <Link href="/projects" className="btn">See Projects</Link> */}
                </div>
            </div>
        </section>
    )
}
