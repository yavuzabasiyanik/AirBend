
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from "../../store/spots";
import './SpotPage.css';
function Spots() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    return (
        <div className='spots-container'>

        </div>
    )

}



export default Spots;
