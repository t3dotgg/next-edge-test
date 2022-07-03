import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        style={{ width: "64px", marginTop: "2rem" }}
        alt="svelte logo"
      />
      <h1>Theo&apos;s Crappy Benchmark (NextJS On Vercel)</h1>
      <h2>
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href="/edge"
        >
          Edge Version
        </Link>
      </h2>
      <h2>
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href="/lambda"
        >
          Lambda Version
        </Link>
      </h2>
      <h2>
        <Link
          style={{ color: "blue", textDecoration: "underline" }}
          href="/cache"
        >
          Cache/CDN Version
        </Link>
      </h2>
    </div>
  );
};

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
