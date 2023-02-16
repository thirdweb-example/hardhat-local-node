import type { NextPage } from "next";
import {
  ConnectWallet,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // Connect to your contract here!
  const { contract } = useContract(
    "0x54167074340e95D15a39Cce02A5950386AD9600D"
  );

  // Now you can read and write to your contract, from the connected wallet.
  const { data, isLoading, error } = useContractRead(contract, "greet");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className={styles.description}>
          Your contract greeting:{" "}
          <strong>
            {isLoading ? "loading..." : error ? error.message : data}
          </strong>
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
