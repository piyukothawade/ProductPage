import React from 'react';


const CustomButton = ({ buttonText, onButtonClick }) => {
    return (
        <button className="normalBtn" onClick={onButtonClick}>
            {buttonText}
        </button>
    );
};

export default CustomButton;
