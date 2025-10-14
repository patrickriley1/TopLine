import React from "react";
import { Link } from 'react-router-dom';

function Book() {
    return (
        <main>
            {/*  old header
            <header className="Title">
                <div className="spacer">
                    <h1>Top Line Detailing</h1>
                </div>
                <hr />
            </header> */}
            <div className="BookSection">
                <Link to="/" className="backButton"><p>Back</p></Link>

                <div className="BookTitle">
                    <h2>Choose from one of our Services!</h2>
                </div>
                <div className="flexrow">
                    <div className="PackageCard">
                        <h2>Basic Package</h2>
                        <ul>
                            <li>Exterior wash and wax</li>
                        </ul>
                    </div>
                    <div className="PackageCard">
                        <h2>Premium Package</h2>
                        <ul>
                            <li>Exterior wash and wax</li>
                            <li>Interior vacuum and cleaning</li>
                            <li>Engine bay cleaning</li>
                            <li>Wheel and tire cleaning</li>
                            <li>Headlight restoration</li>
                            <li>Clay bar treatment</li>
                            <li>Paint correction (if needed)</li>
                        </ul>
                    </div>
                    <div className="PackageCard">
                        <h2>Ceramic Coating</h2>
                        <ul>
                            <li>High-quality ceramic coating application</li>
                            <li>Long-lasting protection and shine</li>
                        </ul>
                        <a href="tel:2392840586">Text or Call now to get a quote!</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Book;