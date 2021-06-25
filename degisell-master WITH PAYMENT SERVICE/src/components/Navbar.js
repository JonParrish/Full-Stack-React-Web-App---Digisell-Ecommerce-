import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar({event, ...props}) {
    const history = useHistory();
    const classes = useStyles();


    const logout = () => {
        console.log(props.session)
        props.setUser(null)
        history.push("/")
    }

    useEffect(() => {
        //
      }, [props.session]);

    return (
        <div>
        {props.session ? (
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        DigiSell
                    </Typography>
                    <Button onClick={() => logout()} variant="contained" color="primary" >
                        Logout
                    </Button>
            </Toolbar>
            </AppBar>
        </div>
        ) : (
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        DigiSell
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
        )}
        </div> 
    )

}