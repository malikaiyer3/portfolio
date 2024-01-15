import React from "react";

const NavBar: React.FC = () => {
    return (
        <>
            <nav
                id="navbar-example2"
                className="navbar navbar-light bg-light px-3"
            >
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">
                            First
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">
                            Second
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">
                            Third
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading4">
                            Fourth
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex={0}
            ></div>
        </>
    );
};

export default NavBar;
