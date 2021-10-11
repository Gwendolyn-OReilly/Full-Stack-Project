import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	const {
		error,
		isPending,
		data: blogs,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className="home">
			{
				<h3>
					{`There are currently ${(Math.random() * 1000).toFixed(4)}
					otherworldly and time-traveling visitors on Earth`}
				</h3>
			}
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home;
