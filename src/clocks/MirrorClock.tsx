import BaseClock from "../BaseClock";

export default class MirrorClock extends BaseClock {
    public canShowTime(): boolean {
        return true;
    }
    public render(time: Date) {
        const style = {
            MozTransform: "scale(-1, 1)",
            WebkitTransform: "scale(-1, 1)",
            OTransform: "scale(-1, 1)",
            msTransform: "scale(-1, 1)",
            transform: "scale(-1, 1)"
        };

        return (<div style={style}>
            {time.toISOString()}
        </div>);
    }

}
