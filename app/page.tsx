import RouterRefreshDemo from "./RouterRefreshDemo";
import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div>
    <RouterRefreshDemo/>
    <Link href={"/other"}>Navigate somewhere else</Link>
  </div>
}
