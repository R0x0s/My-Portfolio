import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import checkbox from "../assets/img/checkbox.svg";
//import meter2 from "../assets/img/meter2.svg";
//import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>The skill sets I've aquired<br></br><br></br></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> UI/UX</h5>
                                </div>
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> MYSQL2</h5>
                                </div>
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> Node</h5>
                                </div>
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> React</h5>
                                </div>
                                <div className="item">
                                    <img src={checkbox} alt="meter1" />
                                    <h5> MongoDB</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}