import React from "react";
import { Link } from 'react-router-dom';

function Book() {
    return (
        <main>
            <header className="Title">
                <div className="spacer">
                    <h1>Top Line Detailing</h1>
                </div>
                <hr />
            </header>
            <div className="BookSection">
                <div className="BookTitle">
                    <Link to="/" className="backButton"><p>Back</p></Link>
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
                            <li>Interior vacuum and wipe down</li>
                        </ul>
                    </div>
                    <div className="PackageCard">
                        <h2>Ceramic Coating</h2>
                        <ul>
                            <li>High-quality ceramic coating application</li>
                            <li>Long-lasting protection and shine</li>
                        </ul>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Book;