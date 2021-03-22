import React, {useState} from 'react';

import {Grid, BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import AOS from "aos";

// import the styled component
import useStyles from "../../styles/home/BodyStyle";

import FetchedRecentData from "../../adapters/home/FetchedRecentData";
import {userData} from "../../contexts/UserData";

const BodyComponent = () => {
    AOS.init();

    const classes = useStyles();

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  const userInfo = userData();

    return (<>

        <BottomNavigation value={value}
            onChange={handleChange}
            className={
                classes.root
        }>
            <BottomNavigationAction label="Recents" value="recents"
                className={
                    classes.iconColor
                }
                icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Reviews" value="favorites"
                className={
                    classes.iconColor
                }
                icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" value="nearby"
                className={
                    classes.iconColor
                }
                icon={<LocationOnIcon/>}/>

        </BottomNavigation>

        <div className={
            classes.root
        }>

            <Grid container
                spacing={1}>
                <Grid container item
                    xs={12}> {
                    value === "favorites" && (<FetchedRecentData city="" sort="comments"/>)
                }
                    {
                    value === "nearby" && (<FetchedRecentData city={userInfo.city} sort=""/>)
                }
                    {
                    value === "recents" && (<FetchedRecentData city="" sort=""/>)
                } </Grid>
            </Grid>
        </div>
    </>);
};

export default BodyComponent;
