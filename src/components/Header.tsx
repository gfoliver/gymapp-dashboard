import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex items-center p-8 px-6 border-b border-white border-opacity-30">
            <h1 className="text-2xl text-white"><b>GymApp</b> - Dashboard</h1>
        </div>
    );
}

export default Header;