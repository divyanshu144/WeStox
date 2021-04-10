import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from "./Header"


const useStyles = makeStyles((theme) => ({
  index: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/stock.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.index}>
      <CssBaseline />
      <Header />
      
    </div>
  );
}
