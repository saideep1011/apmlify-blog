import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
    console.log("dataaaaaaaaaaa", postData.data.listPosts.items);
  }
  console.log("ssssssss",posts);
  return (
    <div>
      <h1>my posts</h1>
     {posts.map((post,index) =>(
       <p key={post.id}>{post.title}</p>
     ))}
    </div>
  );
}
