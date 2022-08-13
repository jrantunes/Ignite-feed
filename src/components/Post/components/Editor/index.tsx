/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef } from "react";
import rehypeSanitize from "rehype-sanitize";

import styles from "./Editor.module.css";

type EditorProps = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  preview?: boolean;
};

export function Editor({ value, setValue, preview = false }: EditorProps) {
  const previewRef = useRef<any>();

  useEffect(() => {
    if (preview) {
      const children: HTMLCollection = previewRef.current.mdp.current.children;

      if (children) {
        [...children].forEach((child: any) => {
          let innerContent = ``;

          child.innerHTML.split(" ").forEach((element: any) => {
            if (element.startsWith("#")) {
              innerContent += ` <span class="tag-elmnt">${element}</span>`;

              return;
            }

            innerContent += " " + element;
          });

          child.innerHTML = innerContent;
        });
      }
    }
  }, [preview]);

  return (
    <>
      {!preview ? (
        <MDEditor
          className={styles.editor}
          textareaProps={{ placeholder: "Deixe um comentário" }}
          extraCommands={[]}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]]
          }}
          visibleDragbar={false}
          preview="edit"
          value={value}
          onChange={setValue}
        />
      ) : (
        <MDEditor.Markdown
          ref={previewRef}
          source={value}
          className={styles.preview}
        />
      )}
    </>
  );
}
