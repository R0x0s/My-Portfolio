import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/CinderShot.png";
import projImg2 from "../assets/img/cheatleaf.png";

export const Projects = () => {

    const projects = [
        {
            title: "Cinder",
            description: "Dating App/Socail platform for dev's",
            imgUrl: projImg1,
        },
        {
            title: "Cheat Leaf",
            description: "Study tool for developers and students",
            imgUrl: projImg2,
        },
        {
            title: "Cinder",
            description: "Dating App/Socail platform for dev's",
            imgUrl: projImg1,
        },
        {
            title: "Cinder",
            description: "Dating App/Socail platform for dev's",
            imgUrl: projImg1,
        },
        {
            title: "Cinder",
            description: "Dating App/Socail platform for dev's",
            imgUrl: projImg1,
        },

    ];
    

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <p>Here's what I've made so far that I'm proudn enough to showcase</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        </Tab.Pane>
                            <Tab.Pane eventKey="second">Second</Tab.Pane>
                            <Tab.Pane eventKey="third">third</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        <img className="backround-image-right" src={colorSharp2}></img>
        </section>

    )
}