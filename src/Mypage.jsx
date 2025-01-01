import React from 'react';
import './style.css'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Mypage() {
    return <>
        <Topbar />
        <div className='content'>
            <Sidebar />
            <MainContent />
        </div>
    </>
}

export default Mypage;