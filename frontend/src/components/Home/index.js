import { NavLink } from "react-router-dom";
import './Home.css';

function Home() {


    return (
        <div className="home-container">

            <NavLink to='/spots'>Get all the Listings</NavLink>
        </div>

    )
}

export default Home;
