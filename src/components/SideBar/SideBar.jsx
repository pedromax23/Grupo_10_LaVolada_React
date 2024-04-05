import React from 'react';
import image from '../../assets/images/la_volada_logo.png';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import GenresInDb from '../GenresInDb/GenresInDb';
import LastMovieInDb from '../LastMovieInDb/LastMovieInDb';
import ContentRowMovies from '../ContentRowMovies/ContentRowMovies';
import './SideBar.css'

import NotFound from '../NotFound';
import SearchMovies from '../SearchMovies/SearchMovies'

import {Link, Route, Routes} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            <ul className="menu_lateral navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className='link_imagen' href="/">
                    <div className="div_imagen sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - La Volada</span>
                    </Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Variedades</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo producto</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Search Mocies</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Routes>
                <Route path="/" element={<ContentWrapper />} />

                <Route path="/GenresInDb" element={<GenresInDb />} />

                <Route path="/LastMovieInDb" element={<LastMovieInDb />} />

                <Route path="/ContentRowMovies" element={<ContentRowMovies />} />

                <Route path="/SearchMovies" element={<SearchMovies />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;