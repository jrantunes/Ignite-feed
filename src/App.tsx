import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

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
    content:
      "Fala galeraa 👋\n\n\nAcabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀\n\n\n👉 [jane.design/doctorcare](https://jane.design/doctorcare.com)\n\n\n#novoprojeto #nlw #rocketseat\n",
    createdAt: new Date("2022-01-22 09:30:22")
  },

  {
    id: 2,
    author: {
      id: 2,
      name: "Pedrinho javascript",
      // avatar_url:
      //   "https://d301sr5gafysq2.cloudfront.net/69e899619e02/img/repo-avatars/js.png",
      imageUrl:
        "https://lh3.googleusercontent.com/RG92soY11tCRckJuiLvwUF0YACEyBcC4m-GUre3ffB6afsGiRGJw1n-8CWtHkC7Q049HmyfU4aPGNtQ=w544-h544-l90-rj",
      role: "Javascripter"
    },
    content:
      "Fala galeraa 👋\n\n\nAcabei de subir mais um projeto no meu #portifa. É um projeto que fiz no #NLWReturn, evento da #Rocketseat. O nome do projeto é #DoctorCare 🚀\n\n\n👉 [jane.design/doctorcare](https://jane.design/doctorcare.com)\n\n\n#novoprojeto #nlw #rocketseat #felicidade #evolucao #ebaaa\n",
    createdAt: new Date("2022-02-12 09:45:00")
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
