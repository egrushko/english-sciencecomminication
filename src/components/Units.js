import {Task} from '../components/Task'
import {Unit} from '../components/Unit'
import {ManyVideosTask} from '../components/ManyVideosTask'
import { Col, Container,Row } from 'react-bootstrap'
import '../css/Units.css'

export const Units = () => {
    return(
        <Container className='units'>
        <Row className='units-handler'>
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 1 | What is the structure of a scientific paper?</h3>
                    <p className='unit-info'>You will learn about the structure of scientific papers. How to read and understand scientific articles.</p>
                    <a className='button' href='#/unit1'><p>GO TO TASKS</p></a>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 1 | What is the structure of a scientific paper?</h3>
                    <p className='unit-info'>You will learn about the structure of scientific papers. How to read and understand scientific articles.</p>
                    <a className='button' href='#/unit2'><p>GO TO TASKS</p></a>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 1 | What is the structure of a scientific paper?</h3>
                    <p className='unit-info'>You will learn about the structure of scientific papers. How to read and understand scientific articles.</p>
                    <a className='button' href='#/unit3'><p>GO TO TASKS</p></a>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 1 | What is the structure of a scientific paper?</h3>
                    <p className='unit-info'>You will learn about the structure of scientific papers. How to read and understand scientific articles.</p>
                    <a className='button' href='#/unit4'><p>GO TO TASKS</p></a>
                </div>
            </Col> 
        </Row> 
        </Container>
    )
}