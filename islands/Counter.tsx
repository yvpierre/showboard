// @ts-ignore
import type { Signal } from "@preact/signals";
// @ts-ignore
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<string>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value = "marcel"}>marcel</Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value = "pierre"}>pierre</Button>
    </div>
  );
}
