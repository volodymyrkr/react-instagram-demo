import React from 'react';

import Profile from '../profile';
import Photos from '../photos';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Profile/>
                <Photos />
            </div>
        );
    }
}

export default Content;