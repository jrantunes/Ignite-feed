import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Carlos",
      // avatar_url:
      //   "https://d301sr5gafysq2.cloudfront.net/69e899619e02/img/repo-avatars/js.png",
      imageUrl:
        "https://lh3.googleusercontent.com/gefP8BEcBFoBroCXHBZ9gxaZZv95Z-o9AarvKHPNYdqtCm8O0rXmkg3wuqP4TU1KlQ3-hZIYmB_o1DUzvA=w544-h544-l90-rj",
      role: "Web developer"
    },
    content: "A de Amor, B de baixinho, C de coração",
    createdAt: new Date("2022-01-22T09:30:22.000Z")
  }
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={{
                name: post.author.name,
                avatar_url: post.author.imageUrl,
                role: post.author.role
              }}
              content={post.content}
              publishedAt={post.createdAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
