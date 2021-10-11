import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The Search for Kryptonite Begins Here</h1>

			<div className="links">
				<Link to="/">
					<button>Home</button>
				</Link>

				<Link to="/create">
					<button>New Log</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
