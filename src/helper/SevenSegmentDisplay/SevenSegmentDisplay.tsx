import React from "react";
import "./SevenSegmentDisplay.sass";

export default function SevenSegmentDisplay(props: {text: string}) {
    return (
        <div className='SevenSegmentDisplay'>
            <h1>{props.text}</h1>
        </div>
    );
}
