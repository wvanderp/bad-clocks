import BaseClock from "../BaseClock";

export default class MirrorClock extends BaseClock {
    public canShowTime(time: Date): boolean {
        return Boolean(time);
    }
    public render(time: Date) {
        const style = {
            transform: "scale(-1, 1)"
        };

        return (<div style={style}>
            {time.toISOString()}
        </div>);
    }

}
