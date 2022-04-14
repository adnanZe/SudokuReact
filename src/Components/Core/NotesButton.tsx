import React from "react";

interface NotesProps {
  isActiveNotes: boolean;
  onAddNotes: React.Dispatch<React.SetStateAction<boolean>>;
}

function Notes(props: NotesProps) {
  const { onAddNotes, isActiveNotes: activeNotes } = props;
  return (
    <button
      className={`notes ${activeNotes ? "on" : ""}`}
      id="notes"
      onClick={() => onAddNotes(activeNotes ? false : true)}
    >
      <i className="fa-solid fa-pencil"></i>
    </button>
  );
}

export default Notes;
