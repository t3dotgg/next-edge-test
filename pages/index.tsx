import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div style={{ padding: "4rem" }}>
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

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false,
};
