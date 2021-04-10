import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Toolbar, Collapse, Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    
    background: 'linear-gradient(0deg, transparent, #111)',
    
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '2rem',
  },
  colorText: {
    color: '#0000A0',
  },
  
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  contain: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  button: {
    borderRadius: '12px',
  },
  span:{
    marginLeft: '10px'
  },

  
}));
export default function Header() {

  const history = useHistory();

  const nextPage = () => {
    history.push("/main");
    
  };

  
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            We<span className={classes.colorText}>Stox.</span>
          </h1>
          <Button className={classes.button} variant="contained" color="primary" 
                  onClick={nextPage}>Click Here To Explore
              </Button> 
          
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.contain}>
          <h1 className={classes.title}>
            Welcome to We<span className={classes.colorText}>Stox.</span> We"ll help you find the perfect stock for you...<br/>
            <Button className={classes.button} variant="contained" color="primary" 
                  onClick={nextPage}>Click Here To Explore
              </Button> 
          </h1>
        </div>
        <div>
        </div>
      </Collapse>
    </div>
   
  );
}

