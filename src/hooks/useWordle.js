import React, { useState } from "react";

const useWordle = () => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([]); // each guess is an array
	const [history, setHistory] = useState([]); // each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);

	// Format a guess into an array
	const formatGuess = () => {};

	// Add a new guess
	const addNewGuess = () => {};

	// Track current guess
	const handleKeyup = () => {};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
