import React from 'react';

import {hot} from 'react-hot-loader';

import Header from '../../components/instagram/header';
import Content from '../../components/instagram/content';


class Instagram extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default hot(module)(Instagram)