import { Outlet, Link } from "react-router-dom";
import './NavbarStyles.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="main">
                    <div>
                        <a>Boi Khujo</a>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="user">
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Navbar;