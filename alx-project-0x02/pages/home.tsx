import React from "react";
import Link from "next/link";
import Card from "@/components/common/Card";

const home = () => {
  return (
    <div>
      <h1>Welcome to home</h1>
      <Link href="/about">Go to About</Link>
      <Card title="Sample Card" content="This is a sample card component." />
      <Card
        title="Another Card"
        content="This is another sample card component."
      />
    </div>
  );
};

export default home;
