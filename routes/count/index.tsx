// @ts-ignore
import { PageProps } from "$fresh/server.ts";
// @ts-ignore
import { useSignal } from "@preact/signals";
// @ts-ignore
import Counter from "../../islands/Counter.tsx";

export default function Count() {
    const count = useSignal("Claude");

    return <div>
        <h1>Count</h1>
        <Counter count={count} />
    </div>;
}
