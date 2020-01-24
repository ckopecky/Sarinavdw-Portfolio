
import React from 'react';
import "../index.css";

const designSystem = (props) => {
    return (
        <React.Fragment>
            <h3>Design System</h3>
            <div className="box-container">
                <div className="box none" id="brightpink"></div>
                <div className="box none" id="tundora"></div>
                <div className="box none" id="rosequartz"></div>
                <div className="box none" id="bud"></div>
                <div className="box none" id="peach"></div>
                <div className="box none" id="alto"></div>
                <div className="box two-opacity none" id="denim"></div>
                <div className="box six-opacity none" id="bluechalk"></div>
                <div className="box four-opacity none" id="desertsand"></div>
                <div className="box none" id="petiteorchid"></div>
                <div className="box none" id="astral"></div>




            </div>
            <div className="headline-button-container">
                <h1>I'm an h1</h1>
                <h1 className="sans">I'm an h1 in noto sans</h1>
                <br></br>
                <hr/>                
                <h2>I'm an h2</h2>
                <h2 className="sans">I'm an h2 in noto sans</h2>
                <br></br>
                <hr/>                
                <h3>I'm an h3</h3>
                <h3 className="sans">I'm an h3 in noto sans</h3>
                <br></br>
                <hr/>                
                <h4>I'm an h4</h4>
                <h4 className="sans">I'm an h4 in noto sans</h4>
                <br></br>
                <hr/>                
                <p>I'm a p tag</p>
                <p className="sans">I'm a p tag in noto sans</p>
                <br></br>
                <hr/>                
                <button className="btn sans">Button</button>

            </div>
        </React.Fragment>
    );
}
export default designSystem;