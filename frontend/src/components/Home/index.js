import { NavLink } from "react-router-dom";
import './Home.css';

function Home() {


    return (
        <div className="home-container">

            <div className="blackhole">

            </div>
            <div className="home-img-container">

                <div className="img-holder-div">


                    <div className="stuff">
                        <h1>Let your curiosity do the booking</h1>
                        <div className="imflexible"><NavLink exact to={'/spots'}>
                            <button className="imflexible">I'm flexible</button>
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spots-home-page-four">
                <div className="h1inspitationforyournexttrip">
                    <h1>Inspiration for your next trip</h1>
                </div>
                <div className="grid-container-spots">
                    <div className="four-important-cities">
                        <div className="lake-geneva">

                        </div>
                        <div className="second-red">
                            <h1>
                                Lake Geneva
                            </h1>
                        </div>
                    </div>
                    <div className="four-important-cities">
                        <div className="new-buffalo">

                        </div>
                        <div className="second-orange">
                            <h1>
                                New Buffalo
                            </h1>
                        </div>
                    </div>
                    <div className="four-important-cities">
                        <div className="chicago">

                        </div>
                        <div className="second-kirmizi">
                            <h1>
                                Chicago
                            </h1>
                        </div>
                    </div>
                    <div className="four-important-cities">
                        <div className="wisconsin-dells">

                        </div>
                        <div className="second-mor">
                            <h1>
                                Wisconsin Dells
                            </h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Home;
