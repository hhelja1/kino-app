import React from "react"
import '../css/Menu.css'

const Menu = (props) => {
    return(
        <div className="Menu">
            <ul className="Menu_list">
                <li className="Menu_list_logo">logo</li>
                <li className="Menu_list_item">Available and upcoming movies</li>
                <li className="Menu_list_item">See a movie</li>
            </ul>
        </div>
    );
}

export default Menu;