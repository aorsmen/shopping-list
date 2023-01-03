import React from 'react';

const SvgIcon = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d={props.path}></path>
        </svg>
    );
};

export default SvgIcon;