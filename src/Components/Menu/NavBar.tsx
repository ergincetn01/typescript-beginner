import React from "react";
import { Menu } from "antd";
import {Link} from "react-router-dom";

const MenuItem = Menu.Item;

const Navbar:React.FC=()=> 
    {
        return (
            <Menu theme="dark" mode="horizontal">
                <MenuItem >
                <Link to="/home" >Home</Link>
                </MenuItem>
                <MenuItem >
                <Link to="/page2" >page2</Link>
                </MenuItem>
                <MenuItem >
                <Link to="/page3" >page3</Link>
                </MenuItem>
            </Menu>
        )

    }
    export default Navbar;