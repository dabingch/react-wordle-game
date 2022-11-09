import React, { useState } from "react";

const useWordle = () => {
	const [turn, setTurn] = useState(5);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([]); // each guess is an array
	const [history, setHistory] = useState(["hello"]); // each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);

	// Format a guess into an array
	const formatGuess = () => {
		console.log("Formatting guess - ", currentGuess);
	};

	// Add a new guess
	const addNewGuess = () => {};

	// Track current guess
	const handleKeyup = ({ key }) => {
		// console.log(key);
		if (key === "Enter") {
			if (turn < 5) {
				console.log("You have used all your guesses");
				return;
			}

			if (history.includes(currentGuess)) {
				console.log("You already tried that word");
				return;
			}

			if (currentGuess.length !== 5) {
				console.log("World must be 5 chars long");
				return;
			}

			formatGuess();
		}

		if (key === "Backspace") {
			setCurrentGuess((prev) => {
				return prev.slice(0, -1);
			});

			return;
		}

		if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
			setCurrentGuess((prev) => {
				return prev + key;
			});
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
