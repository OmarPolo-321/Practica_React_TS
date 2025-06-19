import { useState } from "react"

interface Props {
  onAdd: (text: string) => void;
}

export const InputToDo = ({ onAdd }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input_box"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button className="input_submit" type="submit">GO</button>
    </form>
  );
};
