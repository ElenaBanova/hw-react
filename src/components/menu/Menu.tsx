import {Link} from "react-router";


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'cars'}>All cars</Link></li>
                <li><Link to={'createNewCar'}>Create new car</Link></li>
            </ul>
        </div>
    );
};

export default Menu;