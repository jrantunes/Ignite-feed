/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef } from "react";

import styles from "./Preview.module.css";

type PreviewProps = {
  isPreviewEnabled: boolean;
  value: string | undefined;
  commentPreview?: boolean;
};

export function Preview({
  isPreviewEnabled,
  value,
  commentPreview = false
}: PreviewProps) {
  const previewRef = useRef<any>();

  useEffect(() => {
    if (isPreviewEnabled) {
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
  }, [isPreviewEnabled]);

  return (
    <MDEditor.Markdown
      ref={previewRef}
      source={value}
      className={commentPreview ? styles.commentPreview : styles.preview}
    />
  );
}
