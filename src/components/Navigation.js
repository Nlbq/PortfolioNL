import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">Accueil</NavLink>

                <li className="nav-portfolio">Projets
                    <ul className="nav-projects">
                        <NavLink to="/project-1" activeClassName="nav-active" className="hover">
                            <li>Multiprisme</li>
                        </NavLink>
                        <NavLink to="/project-2" activeClassName="nav-active" className="hover">
                            <li>Portfolio classique</li>
                        </NavLink>
                        <NavLink to="/project-3" activeClassName="nav-active" className="hover">
                            <li>La Cantina</li>
                        </NavLink>
                        <NavLink to="/project-4" activeClassName="nav-active" className="hover">
                            <li>Ce portfolio</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">Contact</NavLink>
            </ul>
        </div>
    )
}
