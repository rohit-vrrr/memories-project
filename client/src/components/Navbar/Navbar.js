import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./stylesNavbar";
import mementoLogo from "../../images/mementoLogo.png";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        const action = {
            type: 'LOGOUT'
        };
        dispatch(action);
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memento</Typography>
                <img className={classes.image} src={mementoLogo} alt="mementoLogo" height="60" />
            </div>

            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} src={user.result.image} alt={user.result.name}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button className={classes.button} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button className={classes.button} component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
