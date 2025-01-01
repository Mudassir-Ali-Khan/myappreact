import React from 'react';
import '../styles/style.css'
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

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