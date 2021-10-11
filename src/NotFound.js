import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Oh no!</h1>
			<p>Lex Luthor has struck again!</p>
			<Link to="/">
				<button>Return Home</button>
			</Link>
		</div>
	);
};

export default NotFound;
