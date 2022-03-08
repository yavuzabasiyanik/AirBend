// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div onClick={() => openMenu()} className="dropdown">
      <button onClick={() => openMenu()} className="link">
        <div className="hamburger-container">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD7+/vl5eV0dHQ6Ojr19fUzMzPq6uqnp6cwMDC2trbX19dra2t9fX3w8PBWVlagoKA/Pz/Kysrd3d2Li4tNTU0SEhI4ODhoaGh3d3cjIyOtra0hISGmpqZubm6FR3G1AAAB0ElEQVR4nO3daW7bMBAGUDV1vERO4uxrm/vfsk4aIL8aEaTRocbvnWA+UOJiWJxhAAAAAAAAAAAAAPjPlj/7tDxMvO3iR7+et835lufRISa8NQ7kehWdYNJq3ZSw/4D7iCcNAS+iqy9yUR/wMrr2QpfVCX9Hl15oU51wF116oV11wjnMM+9W1QnPoksvdFad8Dq69ELX1QnnsVi0LBc30aUXuqlOOLxE117kpT7gTAaxYQiH4Sq6+gJXLQGHYRNd/6T6Dc2n2743Nrvb1oB76/Fu0ae7se1sCAAAAAAAAAB06aRPB0q3HBf3p326X4wH+Khk8xD9l5lvPby2BnyKjjDpqS1g71/MvDtvCfgaXX2Rlgc1uvZC9QHH6NILjdUJ+59m/qp/Ex+jSy90Wp0w//cW+ccw/3uYfy7Nvx4ewZ4m/750DpNN49li/6BmPx8ewRn/Q/QPMv9woHQAAAAAAAAAQEey332Z/v7S9HfQpr9HOP9d0L+iiy/ScJ/3PIawZRDz36ufvzdC/u8t8vco6Xs786W+z0z+XkH5+z3NZLlo6Nk1j7nmsSXgEfTOG5Zv0QkmtPY/3Ns+R4f4xgF6WH5I3ocUAAAAAAAAAAAAoNwfMzE7moZPeKEAAAAASUVORK5CYII="></img>

        </div>
        <img className="profileImg userprofileUrl" src={user?.profileUrl} alt="" />
      </button>
      {showMenu && (<div className="dropdown-menu dropdown-inside" >
        <div>
          <div className="dropdown-links">
            <NavLink exact to="/profile"><p className="hlsLinks">{user?.username}</p></NavLink>
            <p className="hlsLinks" onClick={logout}>Log Out</p>
          </div>
        </div>
      </div>)}
    </div>

  );
}

export default ProfileButton;
