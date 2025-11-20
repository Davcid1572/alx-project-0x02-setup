import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>Header Component</h1>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/user">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
