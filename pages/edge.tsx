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
      <h1>Theo&apos;s Crappy Benchmark (NextJS On Vercel Edge)</h1>

      <h2>
        <span>
          Full request to render time (according to Theo):{" "}
          <span id="overrideme" />
          ms
        </span>
      </h2>
      <script>
        {`
      const currentTime = new Date(); // round trip time
      const fullTime = currentTime - window.performance.timing.requestStart;
      console.log(\`THEO REPORTS\`, fullTime);
      document.getElementById(\`overrideme\`).innerHTML = fullTime;
        `}
      </script>
    </div>
  );
};

export default Home;

export const getServerSideProps = () => {
  return { props: { message: new Date().toString() } };
};

export const config = {
  unstable_runtimeJS: false,
};
