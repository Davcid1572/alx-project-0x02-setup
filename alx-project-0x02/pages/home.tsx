import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const home = () => {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <h1>Welcome to home</h1>
      <Link href="/about">Go to About</Link>
      <div className="p-6 space-y-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Post
        </button>

        {/* Static cards */}
        <Card
          title="Welcome"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Our Services"
          content="We offer web development and design services."
        />
        <Card
          title="Contact Us"
          content="Reach out via email or phone for inquiries."
        />

        {/* Dynamic cards from modal */}
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {/* Modal */}
        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}
      </div>
    </div>
  );
};

export default home;
