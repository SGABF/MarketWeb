import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/login")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>

      <main>
        {posts.map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;
