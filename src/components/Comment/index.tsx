import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        imageUrl="https://d301sr5gafysq2.cloudfront.net/69e899619e02/img/repo-avatars/js.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Carlinhos <span>(você)</span>
              </strong>
              <time
                title="06 de Agosto às 09:46h"
                dateTime="2022-08-06 09:46:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
