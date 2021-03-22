import React from 'react';

// import the material-ui core
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    IconButton
} from '@material-ui/core';

// import the icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PublishIcon from '@material-ui/icons/Publish';

// import the styled component here
import useStyles from "../../styles/home/HeaderStyle";
import {Link} from 'react-router-dom';
import {userData} from "../../contexts/UserData";
import { AccountBoxRounded } from '@material-ui/icons';


const HeaderComponent = () => {

    const classes = useStyles();
    const userInfo = userData();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu anchorEl={anchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={menuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Link to="/products/upload/" style={
                    {textDecoration: "none"}
                }>
                    Upload Product</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={mobileMenuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            {/* Start of the Mobile Notifications Icon */}
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={0}
                        color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <h5>Notifications</h5>
            </MenuItem>
            {/* End of the Mobile Notifications Icon */}
            {/* Start of the Mobile Profile Icon */}
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                    <AccountCircle/>
                </IconButton>
                <h5>Profile</h5>
            </MenuItem>
            {/* End of the Mobile Profile Icon */}
            {/* Start of the Mobile Upload Product Icon */}
            <Link to="/products/upload/"
                style={
                    {textDecoration: "none"}
            }>
                <MenuItem>

                    <IconButton aria-label="upload product" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                        <PublishIcon/>
                    </IconButton>
                    <h5>Upload Product</h5>
                </MenuItem>
            </Link>
            {/* End of the Mobile Upload Product Icon */}
            {userInfo !== null &&(
                 <Link to="/auth/login/"
                 style={
                     {textDecoration: "none"}
             }>
                 <MenuItem>
 
                 <IconButton aria-label="upload product" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                        <AccountBoxRounded/>
                    </IconButton>
                    <h5>Log Out</h5>
                 </MenuItem>
             </Link>
            )}
            {userInfo === null &&(
                 <Link to="/auth/login/"
                 style={
                     {textDecoration: "none"}
             }>
                 <MenuItem>
 
                     <IconButton aria-label="upload product" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                     <AccountBoxRounded/>
                     </IconButton>
                     <h5>Log In</h5>
                 </MenuItem>
             </Link>
            )}
             </Menu>
    );

    return (
        <div className={
            classes.grow
        }>
            <AppBar position="static"
                className={
                    classes.appBar
            }>
                <Toolbar>
                    <IconButton edge="start"
                        className={
                            classes.menuButton
                        }
                        color="inherit"
                        aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={
                            classes.title
                        }
                        variant="h6"
                        noWrap>
                        TradeDepot
                    </Typography>
                    <div className={
                        classes.search
                    }>
                        <div className={
                            classes.searchIcon
                        }>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search for product here..."
                            classes={
                                {
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }
                            }
                            inputProps={
                                {'aria-label': 'search'}
                            }/>
                    </div>
                    <div className={
                        classes.grow
                    }/>
                    <div className={
                        classes.sectionDesktop
                    }>
                        <IconButton aria-label="Upload Product" color="inherit">
                            <Badge badgeContent={0}
                                color="secondary">
                                <Link to="/products/upload/"><PublishIcon/></Link>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 0 new notifications" color="inherit">
                            <Badge badgeContent={0}
                                color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={
                        classes.sectionMobile
                    }>
                        <IconButton aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu} </div>
    );
}

export default HeaderComponent;
