import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        style={{ width: "64px", marginTop: "2rem" }}
        alt="svelte logo"
      />
      <h1>Theo&apos;s Crappy Vercel Runtimes Benchmark</h1>
      <h2>
        <a style={{ color: "blue", textDecoration: "underline" }} href="/edge">
          NextJS Edge Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="/lambda"
        >
          NextJS Lambda Version
        </a>
      </h2>
      <h2>
        <a style={{ color: "blue", textDecoration: "underline" }} href="/cache">
          NextJS Cache/CDN Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://svelte-edge.vercel.app/"
        >
          Svelte Edge Version
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
