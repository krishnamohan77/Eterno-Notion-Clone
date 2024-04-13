import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  DefaultReactSuggestionItem,
  SuggestionMenuController,
  SuggestionMenuProps,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";

import { useTheme } from "next-themes";
import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";

import "@blocknote/core/style.css";

import { useEdgeStore } from "@/lib/edgestore";

import "./styles.css";

// Custom component to replace the default Slash Menu.
interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    });

    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({

    initialContent:
      initialContent
        ? JSON.parse(initialContent) as PartialBlock[]
        : undefined,
    uploadFile: handleUpload
  })

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor;