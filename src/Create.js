import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Kal-El");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("log added");
			setIsPending(false);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Log New Crystal</h2>
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Description:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Entity:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="Kal-El">Kal-El</option>
					<option value="Kara Jor-El">Kara Jor-El</option>
				</select>
				{!isPending && <button>Add</button>}
				{isPending && <button disabled>Adding...</button>}
			</form>
		</div>
	);
};

export default Create;
