import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
	return (
		<div className="modal">
			{isCorrect && (
				<div>
					<h1>You win!</h1>
					<p className="solution">Solution - {solution}</p>
					<p>You found the solution in {turn} guesses :)</p>
					<p>You can refresh the page to start a new game :)</p>
				</div>
			)}
			{!isCorrect && (
				<div>
					<h1>Never mind!</h1>
					<p className="solution">Solution - {solution}</p>
					<p>Better luck next time :)</p>
					<p>You can refresh the page to start a new game :)</p>
				</div>
			)}
		</div>
	);
};

export default Modal;
