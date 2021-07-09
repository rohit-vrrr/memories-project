import React from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./stylesNavbar";
import memories from "../../images/memories.png";

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>

            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} src={user.result.image} alt={user.result.name}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
