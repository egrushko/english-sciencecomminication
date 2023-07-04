import { Col, Container,Row } from 'react-bootstrap'
import '../css/Units.css'
import { useState,useEffect } from 'react';

export const Units = () => {
    const [ind,setInd] = useState(0);
    const [unitNum,setUnit] = useState(0);
    useEffect(() => {
        var parsed = JSON.parse(window.localStorage.getItem('ind'+unitNum));
        setInd(parsed?parsed:0);
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('ind'+unitNum, ind);
      }, [ind]);

    function handleButtonClick(index,unit) {
        window.scrollTo(0, 0)
        
        setInd(index);
        setUnit(unit)
        
    }
    return(
        <Container className='units'>
        <Row className='units-handler'>
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 1 | What is the structure of a scientific paper?</h3>
                    <div className="unit-in-handler-buttons">
                        <a className='button' onClick={()=>handleButtonClick(1,1)} href='#/unit1'><p>Task 1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(2,1)} href='#/unit1'><p>Task 2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(3,1)} href='#/unit1'><p>Task 3</p></a>
                        <a className='button' onClick={()=>handleButtonClick(4,1)} href='#/unit1'><p>Task 4</p></a>
                        <a className='button' onClick={()=>handleButtonClick(5,1)}href='#/unit1'><p>Video 1.1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(6,1)} href='#/unit1'><p>Task 5</p></a>
                        <a className='button' onClick={()=>handleButtonClick(7,1)} href='#/unit1'><p>Task 6</p></a>
                        <a className='button' onClick={()=>handleButtonClick(8,1)} href='#/unit1'><p>Video 1.2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(9,1)} href='#/unit1'><p>Task 7</p></a>
                        <a className='button' onClick={()=>handleButtonClick(10,1)} href='#/unit1'><p>Task 8</p></a>
                        <a className='button' onClick={()=>handleButtonClick(11,1)} href='#/unit1'><p>Task 9</p></a>
                        <a className='button' onClick={()=>handleButtonClick(12,1)} href='#/unit1'><p>Speaking</p></a>
                    </div>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 2 | How to read a scientific paper?</h3>
                    <div className="unit-in-handler-buttons">
                        <a className='button' onClick={()=>handleButtonClick(1,2)} href='#/unit2'><p>Task 1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(2,2)} href='#/unit2'><p>Task 2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(3,2)} href='#/unit2'><p>Task 3</p></a>
                        <a className='button' onClick={()=>handleButtonClick(4,2)} href='#/unit2'><p>Task 4</p></a>
                        <a className='button' onClick={()=>handleButtonClick(5,2)} href='#/unit2'><p>Task 5</p></a>
                        <a className='button' onClick={()=>handleButtonClick(6,2)} href='#/unit2'><p>Task 6</p></a>
                        <a className='button' onClick={()=>handleButtonClick(7,2)} href='#/unit2'><p>Task 7</p></a>
                        <a className='button' onClick={()=>handleButtonClick(8,2)} href='#/unit2'><p>Task 8</p></a>
                        <a className='button' onClick={()=>handleButtonClick(9,2)} href='#/unit2'><p>Video 2.1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(10,2)} href='#/unit2'><p>Video 2.2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(11,2)} href='#/unit2'><p>Speaking</p></a>
                    </div>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 3 | Improving Power Point Presentations</h3>
                    <div className="unit-in-handler-buttons">
                        <a className='button' onClick={()=>handleButtonClick(1,3)} href='#/unit3'><p>Task 1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(2,3)} href='#/unit3'><p>Task 2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(3,3)} href='#/unit3'><p>Task 3</p></a>
                        <a className='button' onClick={()=>handleButtonClick(4,3)} href='#/unit3'><p>Task 4</p></a>
                        <a className='button' onClick={()=>handleButtonClick(5,3)} href='#/unit3'><p>Video 3.1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(6,3)} href='#/unit3'><p>Speaking 1</p></a>
                        <a className='button' onClick={()=>handleButtonClick(7,3)} href='#/unit3'><p>Task 5</p></a>
                        <a className='button' onClick={()=>handleButtonClick(8,3)} href='#/unit3'><p>Task 6</p></a>
                        <a className='button' onClick={()=>handleButtonClick(9,3)} href='#/unit3'><p>Video 3.2</p></a>
                        <a className='button' onClick={()=>handleButtonClick(10,3)} href='#/unit3'><p>Speaking 2</p></a>
                    </div>
                </div>
            </Col> 
            <Col>
                <div className='unit-in-handler'>
                    <h3 className='unit-title'>Unit 4 | Why Don’t the Mathematicians Learn to Speak?</h3>
                    <a className='button' href='#/unit4'><p>GO TO TASKS</p></a>
                </div>
            </Col> 
        </Row> 
        </Container>
    )
}