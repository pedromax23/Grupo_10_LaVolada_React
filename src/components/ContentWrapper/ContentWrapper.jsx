import React from 'react';
import TopBar from '../TopBar/TopBar';
import ContentRowTop from '../ContentRowTop/ContentRowTop';
import Footer from '../Footer/Footer';
import './ContentWrapper.css'

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;