import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({height, width, radius, color, ariaLabel}) => {
    return (
        <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{"text-align":"center", "background-color":"blue"}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    );
}

export default Loader;
