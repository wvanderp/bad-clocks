import React from "react";
import "./RoundClock.css";

export default function RoundClock(props: {hourAngle: number, minuteAngle: number, secondAngle: number}) {
    const hourHandStyle = {
        transform: `rotate(${props.hourAngle}deg)`
    };

    const minuteHandStyle = {
        transform: `rotate(${props.minuteAngle}deg)`
    };

    const secondHandStyle = {
        transform: `rotate(${props.secondAngle}deg)`
    };
    
    return (
        <div className='RoundClock'>
            <div className='outer-clock-face'>
                <div className="marking marking-one"></div>
                <div className="marking marking-two"></div>
                <div className="marking marking-three"></div>
                <div className="marking marking-four"></div>
                <div className="inner-clock-face">

                    <div className="hand hour-hand" style={hourHandStyle} ></div>
                    <div className="hand min-hand" style={minuteHandStyle}></div>
                    <div className="hand second-hand" style={secondHandStyle}></div>
                </div>

            </div>
        </div>
    );
}
