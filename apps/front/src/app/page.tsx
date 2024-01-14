import { log } from "logger";
import { CounterButton, Link } from "ui";
import { NotionRenderer } from 'react-notion-x'
import { useEffect, useState } from "react";
import axios from "axios";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store(): JSX.Element {
  log("Hey! This is the Store page.");
  const [recordMap, setRecordMap] = useState<any>(undefined)

  useEffect(() => {
    axios.get('localhost:5000/notion')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        
      });
  }, [])
  

  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}
