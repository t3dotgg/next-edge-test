import type { NextPage } from "next";
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
        <a style={{ color: "blue", textDecoration: "underline" }} href="/edge">
          Edge Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="/lambda"
        >
          Lambda Version
        </a>
      </h2>
      <h2>
        <a style={{ color: "blue", textDecoration: "underline" }} href="/cache">
          Cache/CDN Version
        </a>
      </h2>
    </div>
  );
};

export default Home;
