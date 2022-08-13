import { FormEvent, useCallback, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Editor } from "./components/Editor";

import styles from "./Post.module.css";

export type Author = {
  avatar_url: string;
  name: string;
  role: string;
};

export type PostProps = {
  author: Author;
  publishedAt: Date;
  content: string;
};

export function Post({ author, content, publishedAt }: PostProps) {
  const [comment, setComment] = useState<string | undefined>("");
  const [showPreview, setShowPreview] = useState(false);

  const handleComment = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      console.log("comment", comment);
    },
    [comment]
  );

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="06 de Agosto às 09:46h" dateTime="2022-08-06 09:46:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          {/* eslint-disable-next-line prettier/prettier */}
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm} onSubmit={handleComment}>
        <header>
          <strong>Deixe seu feedback</strong>
          <button
            type="button"
            onClick={() => setShowPreview((oldState) => !oldState)}
            onFocus={(e) => e.target.blur()}
            className={styles.previewButton}
          >
            {showPreview && "Esconder"} Preview
          </button>
        </header>

        {/* <textarea
          placeholder="Deixe um comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        /> */}

        <Editor value={comment} setValue={setComment} preview={showPreview} />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
