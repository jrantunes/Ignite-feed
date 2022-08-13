/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { Preview } from "../Preview";

import styles from "./Editor.module.css";

type EditorProps = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  preview?: boolean;
};

export function Editor({ value, setValue, preview = false }: EditorProps) {
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
        <Preview commentPreview isPreviewEnabled={preview} value={value} />
      )}
    </>
  );
}
