import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerLinksData } from "../../data/data";

import styles from "./header.css";



const Header = () => {
    const navigate = useNavigate();

    const [active, setActive] = useState(false);

    const menuHandler = () => {
        setActive(!active);
    }

    return 
}