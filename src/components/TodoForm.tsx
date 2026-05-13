import { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

const TodoForm = ({ onAdd }: Props) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Enter todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button className="bg-blue-500 text-white px-4 rounded">
                Add
            </button>
        </form>
    );
};

export default TodoForm;