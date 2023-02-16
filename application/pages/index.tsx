import { ConnectWallet, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract, isLoading, error } = useContract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  console.log({ contract, isLoading, error });

  return (
    <div className={styles.container}>
      Hello world
      <ConnectWallet />
    </div>
  );
};

export default Home;
