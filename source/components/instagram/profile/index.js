import React from 'react';

// Instruments
import avatar from '../../../theme/assets/images/joe';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="layout">
                    <img src={avatar}/>
                    <div>
                        <div className="nickname">Joe66</div>
                        <div className="stats">
                        <span>36&nbsp;</span>
                        <span>posts</span>
                        <span>1256&nbsp;</span>
                        <span>followers</span>
                        <span>6&nbsp;</span>
                        <span>following</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;