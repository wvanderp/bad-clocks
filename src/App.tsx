import RoundClock from "./helper/RoundClock/RoundClock";
import MirrorClock from "./clocks";

export default function App() {
    return (
        <>
            <h1>Bad Clocks</h1>
            <RoundClock hourAngle={0} minuteAngle={90} secondAngle={270} />
            <MirrorClock />
        </>
    );
}
