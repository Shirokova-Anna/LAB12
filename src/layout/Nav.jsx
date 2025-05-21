import React from 'react';
import classes from './Nav.module.css';
import logo from '../images/logo.svg';
import ruler from '../images/measering.svg';
import calc from '../images/calculation.svg';
import {Link, Links} from 'react-router-dom';


function Nav() {
    return (
        <div className={classes.header}>
            <img src={logo} alt="Окна Хаус" />
            <div className={classes.navBut}>
                <Link className={classes.link} to="/Services">Services</Link>
                <Link className={classes.link} to="Products">Products</Link>
                <Link className={classes.link} to="AboutUs">About us</Link>
                <Link className={classes.link} to="Portfolio">Portfolio</Link>
                <Link className={classes.link} to="FAQ">FAQ</Link>
                <Link className={classes.link} to="Contacts">Contacts</Link>
            </div>
            <div className={classes.btns}>
                <button className={`${classes.btn} ${classes.btn1}`}> <img src={ruler} alt="" />Make request</button>
                <button className={`${classes.btn} ${classes.btn2}`}><img src={calc} alt="" />Calculation</button>
            </div>
        </div>
    )
}

export default Nav
