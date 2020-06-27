import React from 'react';
import ReactDOM from 'react-dom';
import {ProfileProvider} from '../ProfileContext';
import Layout from '../components/ProfilePage/Layout';

const ProfilePage = ()=>(
    <div>
        <Layout/>
    </div>
);

if(document.getElementById('profile')){
    ReactDOM.render(<ProfileProvider><ProfilePage /></ProfileProvider>, document.getElementById('profile'));
}