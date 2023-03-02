import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Admins: React.FC = () => {
    return (
        <div className='flex flex-col flex-grow'>
            <Header />
            <div className="grid flex-grow grid-cols-app">
                <Sidebar />
                <div className="flex-grow p-6">
                    <h1 className="text-white">Admins</h1>
                </div>
            </div>
        </div>
    );
}

export default Admins;