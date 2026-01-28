import { ReactElement } from "react";

export default abstract class BaseClock {
    public abstract canShowTime(time: Date): boolean;
    public abstract render(time: Date): ReactElement;
}
