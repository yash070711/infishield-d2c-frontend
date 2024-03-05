const Header: React.FC = () => {
    return (
        <>
      <header id="headerSection">
            <div className="container-fluid">
                <div className="row">
                    {/* Top Header */}
                    <div className="topHeader">
                        <div className="container">
                            <div className="row">
                                <div className="navTop">
                                    <ul>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false"> About</a>
                                            <div className="dropdown-menu pb-0">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <a className="dropdown-item" href="about-InfyShield.html">InfyShield</a>
                                                        <hr className="dropdown-divider w-100" />
                                                        <a className="dropdown-item" href="board-members.html">Board Of Directors</a>
                                                        <hr className="dropdown-divider w-100" />
                                                        {/* Add more dropdown items */}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Add more top header items */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Header */}
                    <div className="mainHeader">
                        <div className="container p-0">
                            <div className="middleHeader">
                                <div className="middleHeader___Left">
                                    <div className="headerbrand">
                                        <a href="index.html"> <img src="assets/img/logo/logo.png" width="90px" height="98.6px"
                                                alt="infyShield Logo" /></a>
                                    </div>
                                </div>
                                {/* Add more middle header content */}
                            </div>
                        </div>

                        {/* Bottom Header */}
                        <div className="row">
                            <div className="bottomHeader">
                                <div className="container p-0">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="container-fluid p-0">
                                            <div className="collapse navbar-collapse justify-content-end"
                                                id="navbarNavDropdown">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                                    </li>
                                                    {/* Add more bottom header items */}
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;