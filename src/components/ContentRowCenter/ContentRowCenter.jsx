import React from 'react';
import LastMovieInDb from '../LastMovieInDb/LastMovieInDb';
import Variedades from '../Variedades/Variedades';
import './ContentRowCenter.css'

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Variedades />

        </div>
    )
}

export default ContentRowCenter;