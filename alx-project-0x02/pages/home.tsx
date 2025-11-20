import React from "react";
import Link from "next/link";

const home = () => {
  return (
    <div>
      <h1>Welcome to home</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
};

export default home;
