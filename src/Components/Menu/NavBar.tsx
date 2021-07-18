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
            </Menu>
        )

    }
    export default Navbar;