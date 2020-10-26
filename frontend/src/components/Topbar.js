import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Menu, X, Search, Settings, User, HelpCircle, Lock, LogOut } from 'react-feather';

import { showRightSidebar } from '../redux/actions';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import LanguageDropdown from './LanguageDropdown';

import logo from '../assets/images/logo.png';
import profilePic from '../assets/images/users/avatar-7.jpg';


const Notifications = [{
  id: 1,
  text: 'New user registered',
  subText: '1 min ago',
  icon: 'uil uil-user-plus',
  bgColor: 'primary'
},
{
  id: 2,
  text: 'Karen Robinson',
  subText: 'Wow ! this admin looks good and awesome design',
  icon: 'uil uil-comment-message',
  bgColor: 'success'
},
{
  id: 3,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'uil uil-comment-message',
  bgColor: 'danger'
}, {
  id: 4,
  text: 'New user registered',
  subText: '1 day ago',
  icon: 'uil uil-user-plus',
  bgColor: 'info'
},];

const ProfileMenus = [{
  label: 'My Account',
  icon: User,
  redirectTo: "/",
},
{
  label: 'Settings',
  icon: Settings,
  redirectTo: "/"
},
{
  label: 'Support',
  icon: HelpCircle,
  redirectTo: "/"
},
{
  label: 'Lock Screen',
  icon: Lock,
  redirectTo: "/"
},
{
  label: 'Logout',
  icon: LogOut,
  redirectTo: "/account/logout",
  hasDivider: true
}]


class Topbar extends Component {
  constructor(props) {
    super(props);

    this.handleRightSideBar = this.handleRightSideBar.bind(this);
  }
  componentDidMount(){
    console.log(window.screen.height);
  console.log(window.screen.width);
  }
  
  /**
   * Toggles the right sidebar
   */
  handleRightSideBar = () => {
    this.props.showRightSidebar();
  }

  render() {
    return (
      <React.Fragment>
        <div style={{display: 'flex', justifyContent: 'inline' }} className="navbar navbar-expand flex-column flex-md-row navbar-custom">
          <Container fluid>
            { /* logo */}
          {window.screen.width<=500?(
            <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
            <li className="">
              <button className="button-menu-mobile open-left disable-btn" onClick={this.props.openLeftMenuCallBack}>
                <Menu className="menu-icon" />
                <X className="close-icon" />
              </button>
            </li>
          </ul>
          ):
          <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0" hidden>
              <li className="">
                <button className="button-menu-mobile open-left disable-btn" onClick={this.props.openLeftMenuCallBack}>
                  <Menu className="menu-icon" />
                  <X className="close-icon" />
                </button>
              </li>
            </ul>
          }
            

            <Link to="/home" >
              {window.screen.width>=500?(
                <span className="logo-lg">
                <img src={logo} alt="" height="30" />
              </span>
              )
            :<span style={{ marginLeft: '60px', marginRight: '60px'}} className="logo-sm">
            <img src={logo} alt="" height="20" />
          </span>}
              
              
            </Link>

            { /* menu*/}
           


            {/* <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
              <li className="d-none d-sm-block">
                <div className="app-search">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <Search />
                    </div>
                  </form>
                </div>
              </li> */}

              {/* <LanguageDropdown tag="li" /> */}
              <Link to="/notification">
              <NotificationDropdown notifications={Notifications} />
              </Link>
              {/* <li className="notification-list">
                <button className="btn btn-link nav-link right-bar-toggle" onClick={this.handleRightSideBar}>
                  <Settings />
                </button>
              </li> */}

              {/* <ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={'Shreyu N'} description="Administrator" /> */}
            {/* </ul> */}

          </Container>
        </div>
      </React.Fragment >
    );
  }
}

export default connect(
  null,
  { showRightSidebar }
)(Topbar);
