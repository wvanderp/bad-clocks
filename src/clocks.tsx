import MirrorClock from "./clocks/MirrorClock";

const clocks = [
    MirrorClock
];

const getRandomClock = () => clocks[Math.floor(Math.random() * clocks.length)];

export default getRandomClock;
