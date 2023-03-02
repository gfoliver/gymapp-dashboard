import React from 'react';
import { Layers, Lock, Users } from 'react-feather';

import Item from './Item';

const Sidebar: React.FC = () => {
    return (
        <div className="flex-grow border-r border-white border-opacity-30 bg-background">
            <Item Icon={Layers} text="Dashboard" link="/" />
            <Item Icon={Lock} text="Admins" link="/admins" />
            <Item Icon={Users} text="Users" link="/users" />
        </div>
    );
}

export default Sidebar;