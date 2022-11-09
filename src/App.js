import { useEffect, useState } from "react";

function App() {
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3500/solutions")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				const randomSolution =
					json[Math.floor(Math.random() * json.length)];
				setSolution(randomSolution.word);
			});
	}, [setSolution]);

	return (
		<div className="App">
			<h1>Wordle Game</h1>
			{solution && <div>Solution is: {solution}</div>}
		</div>
	);
}

export default App;
