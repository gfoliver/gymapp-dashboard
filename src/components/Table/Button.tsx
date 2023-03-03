import React from 'react';

interface IButton {
    text: string;
    onClick(): void;
}

const Button: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <button className="px-3 py-2 mr-2 leading-none text-white rounded bg-primary" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;