// @ts-ignore
import { useSignal } from "@preact/signals";
// @ts-ignore
import {Navbox} from "../components/Navbox.tsx";

const listMenu = [
    "Studies",
    "Work",
    "About",
    "Contact"
]

export default function Home() {
  return (
    <div>
      Home
        <nav>
            {listMenu.map((item) => {
                return <Navbox name={item} />
            })}
        </nav>
        <div class={"hero"}>
            <h1 className={"heroName"}>PIERRE<br/>YVENOU</h1>
            <p>CREATIVE - DIRECTOR - DEVELOPPER</p>
        </div>
    </div>
  );
}
