import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Planning Poker Documentation</h1>
        <p className="hero__subtitle">
          An open-source tool for collaborative story estimation
        </p>
        <div className={styles.buttons}>
          <a className="button button--secondary button--lg" href="/docs">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Planning Poker Documentation"
      description="An open-source tool for collaborative story estimation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
