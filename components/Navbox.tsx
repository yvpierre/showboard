// @ts-ignore
import { JSX } from "preact";
// @ts-ignore
import { IS_BROWSER } from "$fresh/runtime.ts";

export interface NavBoxProps {
    name: string;
}
export function Navbox(props: NavBoxProps) {
    return (
        <div class={"navbox"}>{props.name}</div>
    );
}
