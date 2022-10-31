import MainBody from "../../components/mainBody/mainBody";
import SideBar from "../../components/sideBar/sideBar";
import TopBar from "../../components/topBar/topBar";
import "./dashBoard.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const navigate = useNavigate();

  const [profile, setProfile] = useState(false);
  return (
    <div className="dashBoard">
      <div className="dashBoardContainer">
        {/* <TopBar />
        <SideBar />
        <MainBody /> */}
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">
          <TopBar />
        </div>
        <div className="mobileTopBar">
          <div className="mobileTopBarFirst">
            <img src={require("../../assets/images/burger_menu.png")} />
            <img src={require("../../assets/images/PASS MANAGER.png")} />
          </div>
          <div className="mobileTopBarLast">
            <img src={require("../../assets/images/search-2.png")} onClick={() => {
                  setToggleSearch(!toggleSearch);
                }}/>
            <img src={require("../../assets/images/sync_icn-2.png")} />
            <img src={require("../../assets/images/profile-2.png")} onClick={() => { setProfile(!profile); }} />
            {profile ? (
              <div className="profileContents">
                <div className="changePassword bottomLine">
                  <div className="changePwText">Change Password</div>
                  <img src={require('../../assets/images/change_pass.png')} alt="change Password" />
                </div>
                <div className="changePassword"
                  onClick={() => {
                    localStorage.removeItem('Authorised');
                    navigate('/');
                    window.location.reload();
                  }}>
                  <div className="changePwText">Sign Out</div>
                  <img src={require('../../assets/images/logout.png')} alt="sign out" />
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="mainBody">
          <MainBody toggleSearch = {toggleSearch} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
