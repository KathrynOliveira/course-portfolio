import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from "react-icons/di"

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "Javascript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "Mysql", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> }
];

function TechnologiesContainer() {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((technologie) => (
                <div className="technology-card" id={technologie.id} key={technologie.id}>
                    {technologie.icon}
                    <div className="technology-info">
                        <h3>{technologie.name}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer