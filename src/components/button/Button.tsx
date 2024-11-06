import React from 'react';


type PropsButton = {
    type: 'submit' | 'button',
    children?: React.ReactNode,
    icon?: React.ReactNode,
    className?: string,
    onClick?:  () => void,
    disabled: boolean
}
const Button = ({type, children, icon, className, onClick, color, disabled}: PropsButton) => {
    return (
        <button
            disabled={disabled}
            color={color}
            onClick={onClick}
            className={className}
            type={type}
        >
            {icon}
            {children}
        </button>
    );
};

export default Button;