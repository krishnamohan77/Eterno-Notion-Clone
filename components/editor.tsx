import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  DefaultReactSuggestionItem,
  SuggestionMenuController,
  SuggestionMenuProps,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";

import "./styles.css";

// Custom component to replace the default Slash Menu.
function CustomSlashMenu(
  props: SuggestionMenuProps<DefaultReactSuggestionItem>
) {
  return (
    <div className={"slash-menu"}>
      {props.items.map((item, index) => (
        <div
          key={index} // Add key prop here
          className={`slash-menu-item${props.selectedIndex === index ? " selected" : ""
            }`}
          onClick={() => {
            props.onItemClick?.(item);
          }}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance.
  return (
    <BlockNoteView editor={editor} slashMenu={false}>
      <SuggestionMenuController
        triggerCharacter={"/"}
        suggestionMenuComponent={CustomSlashMenu}
      />
    </BlockNoteView>
  );
}