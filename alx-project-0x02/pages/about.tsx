import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1>Welcome to About</h1>
      <Link href="/home">Go to Home</Link>
    </div>
  );
};

export default about;
