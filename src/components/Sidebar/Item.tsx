import React from 'react';
import { Icon } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

interface ItemProps {
    Icon: Icon;
    text: string;
    link: string;
}

const Item: React.FC<ItemProps> = ({ Icon, text, link }) => {
    const location = useLocation();
    
    const active = location.pathname === link;

    const activeClass = active ? 'text-white' : 'text-text-light';

    return (
        <Link to={link} className={"flex items-center p-6 border-b bg-background-lighter border-border"}>
            <Icon className={activeClass} />
            <span className={"ml-4 " + activeClass}>{text}</span>
        </Link>
    );
}

export default Item;