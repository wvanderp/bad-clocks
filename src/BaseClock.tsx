import { ReactElement } from "react";

export default abstract class BaseClock {
    /**
     * Check whether the clock implementation can display the given time.
     * @param time Time to evaluate.
     */
    public abstract canShowTime(time: Date): boolean;
    /**
     * Render a React element representing the clock at the specified time.
     * @param time Time to display.
     */
    public abstract render(time: Date): ReactElement;
}
