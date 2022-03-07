import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function LoginSignUpButton() {
    const [showMenu, setShowMenu] = useState(false);

    const sessionUser = useSelector((state) => state.session.user);


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <div onClick={() => openMenu()} className="dropdown">
            <button onClick={() => openMenu()} className="link">
                <div className="hamburger-container">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD7+/vl5eV0dHQ6Ojr19fUzMzPq6uqnp6cwMDC2trbX19dra2t9fX3w8PBWVlagoKA/Pz/Kysrd3d2Li4tNTU0SEhI4ODhoaGh3d3cjIyOtra0hISGmpqZubm6FR3G1AAAB0ElEQVR4nO3daW7bMBAGUDV1vERO4uxrm/vfsk4aIL8aEaTRocbvnWA+UOJiWJxhAAAAAAAAAAAAAPjPlj/7tDxMvO3iR7+et835lufRISa8NQ7kehWdYNJq3ZSw/4D7iCcNAS+iqy9yUR/wMrr2QpfVCX9Hl15oU51wF116oV11wjnMM+9W1QnPoksvdFad8Dq69ELX1QnnsVi0LBc30aUXuqlOOLxE117kpT7gTAaxYQiH4Sq6+gJXLQGHYRNd/6T6Dc2n2743Nrvb1oB76/Fu0ae7se1sCAAAAAAAAAB06aRPB0q3HBf3p326X4wH+Khk8xD9l5lvPby2BnyKjjDpqS1g71/MvDtvCfgaXX2Rlgc1uvZC9QHH6NILjdUJ+59m/qp/Ex+jSy90Wp0w//cW+ccw/3uYfy7Nvx4ewZ4m/750DpNN49li/6BmPx8ewRn/Q/QPMv9woHQAAAAAAAAAQEey332Z/v7S9HfQpr9HOP9d0L+iiy/ScJ/3PIawZRDz36ufvzdC/u8t8vco6Xs786W+z0z+XkH5+z3NZLlo6Nk1j7nmsSXgEfTOG5Zv0QkmtPY/3Ns+R4f4xgF6WH5I3ocUAAAAAAAAAAAAoNwfMzE7moZPeKEAAAAASUVORK5CYII="></img>

                </div>
                <img className="profileImg" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUREhIWEBMXFRcTFxIQFRUVFhUWFxIYFxcaGBgYHSggGBomGxMXITEhJSkrLi4uGB8zODUtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABEEAACAQIBBgoGBwcEAwAAAAAAAQIDBBEFEiExQVEGByIyYXGBkaGxE0JiwdHhFFJygrLi8CNDU5LC0vEkY5OiFTNz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4gAAAAAB42B6eN4aXoI66yrFaIcp73q+ZFV7mU+c8fd2ATdbKdOOp532dXe9HcaNXLEvVil14v4EYANqeUKj9Z9mC8kjFK5m/Wl/NL4mIAfWez7jczXrS/ml8TEANqGUai9Z9uD80bVLLEvWin1Yr4kWALDRylTltzftau9aF2m2mVMzULqUOa8PLuAs4I60yrGWifJe/Z8iRTAAAAAAAAAAAAAYLy6VNYvXsW/wCQH1cXEYLGT7NrIK8v5T0aluWr5mG4uJTeLZiAAAAAAACQno5zUftNR8wAMP0ul/Fp/wDJD4maGnmtS+y1LyAAAAAABt2d/KGjXHc/duNQAWi3rxmsYvs2rrMpV7a4lB4plhtLlTWK17Vu+QGcAAAAAAPGwMdzXUI5z7FvZXLmu5vFmbKN1ny0aloX6/Ww1AAAAAAAV/hBwsoWzdNL09Za6cHhGH25bH0LT1Glw34TOivo1CWFZrlzWulFrQl7bXculnOEgJzKXC28rYr0voY/UochYdMuc+8hKjctMm5PfJuXmAB8eijuXcjJSm4vGEpQe+EnHyPABYMmcMrulgpTVxD6tbS8Oia0rxL5kDhHQu9EG4VUsXRqYZ2G1xa0TXV3HIz2E2mpRbjKLxjKLwcWtTT2MDuQK7wP4SfSoOFTBXEFjLDQqkfrxWx/WXbtLEAAAAy21dwlijEALRbV1OOcu7czKV7Jt3mS06nof66PiWFMAAABHZYuc2OYtb19Xz9zJBvDSVm7rZ8nLf8ApeGAGEAAAAANTK1+rejUry05kcUvrSeiK7W0bZTuMy5wo0aS9eo5PqhHR4yA5/VqynKU5vOnJuUpPbJvFs+QAAAAAAAAAM1jeTo1IVqbwnCWcunen0NYp9Z2axu41qcK0OZOKmujHWux4rsOJnReLW7crepSf7upivs1Fj5p94FuAAAAACcyPc50cx61q6vl70QZms62ZJS/WG3wAs4PEwBqZVq5tNr62js1vwWHaV4lMuVOUo7lj3v8viRYAAAAAAKRxoU+Rby9upHvin7i7lZ4xLfOs87bTqwl2Sxi/NAcyAAAAAAAAAAAv3FhT/Z3EvbhHug37ygnTuLy3zbNS21Kk59iwjH8LAsoAAAAAEABYclVc6mujk+9eDQNLIdTS471j3P83gANbKk8akuvDuSXmmah9154yb3tv/sz4AAAAAABA8N7yNOyqqSznUwpRXTJ44/dUcSeKPxoTebbx2Z1SXbmxXkwKIAAAAAAAAAAB1bgTeRqWdJRWa6adGUfajpx7U8e85SX3ivk8y4WzPpvtzWvcBdgAAAAAAAbeSp4VI9eHen78Aa9GeDT3NfiQA+ZHhkuIYSa3Nr/ALMxgAAAAAAqfGRZuVtCql/6qmMvszWbj1Jpd5bDHXoxnGUJrOhKLjKL2xawaA4gCV4R5CnaVMxvPpyxdOptlFPVJbJLFY79ZFAAAAAAAAADpHFxZuFtKq1h6WpivswWan1N5xTuDOQJXdRxxzKUMHUntSeqMVtk8H1azrNKlGMYwglGMUoxitSilgkB9gAAAAAAA9jr7V5nh90IYyS3tfiQA2MqQwqS68e9J+eJqEplynpUt6w7n+bwIsAAAAAAAACtcYNj6S0c0uVRkqn3XyZ+DT7DmJ3CrRjOMoS5s4uD6pLB+ZxO5t5U5zpS50JOD64vD59oGMAAAAAAPqjRc5Rpx505KCw3yeHvA6bxfWXo7NTeutJ1Purkw8E+8sh8UaCpxjTjzYRUF1RWHuPsAAAAAAAADbyVDGpHo0+D9+ANrIVPTKW5Yd7/AC+IA3Mq0s6m+jlfHwbK8y2tFYvKGZJx/WGzw94GEAAAAAAAA53xj5LUKsLmOhVeTNf7kFr7Y4dqOiFC4zrpOVCitaUqr6M7kx8E2BSQAAAAAuHFxktTqzuZaVS5EF/uSXO7I6ullPLtxY3aUq9B65KNWPTm8mXg0wL6AAAAAAAAEDPZUM+ajs29W3w9wE3kulm0108r4eCR4biQAEfle2zo5y1rX1fL4kgAKkDcylaZktHNer4dnwNMAAAACRD5b4TW1tjGcvSVf4NLBy+89UF16egCQyhe06FOVaq82EVp3t7Ix3yepI49lXKE7itOvPRKb5q1RitEYroS95sZdy5WupqVVpRjzKUOZDH8UvaZGgAAAAAA2cm306FWFanzoPHB6pLVKL6GsUawA7TkzKFO4pRrUnjCWx64S2wlukvmbRxzImWa1rPPpPQ8M+nLmVEt62PdJaUdLyHwlt7nBRl6Orto1GlLH2XqmurT0ATADQAAAAidyRbZsc563q6vn8CPyZaZ8sXzVr+H6+BYAAAAAADHXoqcXF/4e8rl1buEsGWcw3VsprB9j3fICsIiss8Ibe20VJ51T+DT5U+3ZHtK5w9ytfUKrt3H6NTeObUptuVaO/0mHJ6YrBooeHxfT17wLHlrhjc18Ywf0ak9GbTfLkvanr7FgVxI9AAAAAAAAAAAADxo9AFiyLwyuaGEZv6TSWjNqPlxXs1NfY8S+ZG4RW1zopzzan8GpyZ9myfYchPGvj1dW4DujM1rbucsEUHgDlS+r1VQUfpNJYZ1Sq2nRj/9MNPRF4tnX7W2UFgte17/AJAfVCioLNX+XvMgAAAAAAAAAGllfJVG5pujWgpwe/WnscXrT6Ucb4XcAq9pjUp43Fvrz4rlwXtxX4lo34HcQB+Xwdr4TcXNtcN1KP8Apar0vNWNOT9qGx9Kw6mcwy9wSu7TF1aTcF+9pcun2taY/eSAgwAAAAAAAAAAAJzIPBG8u8HSpOMH+9q4wh2N6ZfdTAgy4cEeANe7wqVcbe3157XLmvYi9ntPRp0Yl84M8XVtbNVK3+pqrSnNYU4v2YbX0vHsLoBp5JyXRtqao0YKnBbFrb2uT1t9LNwAAAAAAAAAAAAAAAAACu5X4EWNxi5UFTm/Xo/s5dejQ31plQyjxS63QueqNaH9Uf7QAK9d8W2UIc2nCr006kfKeBE3PBW9p8+2qLqSfkwANT/xFxjh6Cp/IzbtuCt9U5ltUfWkvNnoAlrTi2yhPnU4UumpUj5QziwZO4pdTr3PXGjD+qX9oAFvyRwJsbfBwoKc169b9pLrWOhPqSLEAAAAAAAAAAAAH//Z' />
            </button>
            {showMenu && (<div className="dropdown-menu dropdown-inside" >
                <div>
                    <div className="dropdown-links">
                        <NavLink exact to="/"><p className="hlsLinks">Home</p></NavLink>
                        <NavLink to='/login'><p className="hlsLinks">Log In</p></NavLink>
                        <NavLink to='/signup'><p className="hlsLinks">Sign Up</p></NavLink>
                    </div>
                </div>
            </div>)}
        </div>
    );

}



export default LoginSignUpButton;
