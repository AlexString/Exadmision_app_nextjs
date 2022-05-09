import React, { FC, useEffect, useRef } from 'react'
import { QuestionType } from 'types/index';

import styled from 'styled-components'

interface IQuestionProps {
	questionNumber: number;
	question: QuestionType;
}

const Question:FC<IQuestionProps> = props => {
	const { questionNumber } = props;
	const { id, formula_id, description, answers } = props.question;
	const { correct, wrong } = answers;

	// const answersShuffled = useRef<string[]>([])

	// const getAnswers = () => {
	// 	const shuffle = (answers:string[]):string[] => {
	// 		let array = answers;
	// 		for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   	}
	// 		return array
	// 	}

	// 	let answers:string[] = [];
	// 	answers.push(correct)
	// 	answers.push(...wrong);
	// 	answersShuffled.current.push(...shuffle(answers))
	// }

	// useEffect(() => {
	// 	getAnswers();
	// }, [id])

	return (
		<QuestionContainer>
			<h2>Pregunta No. {questionNumber+1}</h2>
			<div>{description}</div>

			<form className='questions-display'>
				<div>
					<input type="radio" id={`${correct}`} value={correct}/>
					<label htmlFor={`${correct}`}>A) {correct}</label>
				</div>

				<div>
					<input type="radio" id={`${wrong[0]}`} value={wrong[0]}/>
					<label htmlFor={`${wrong[0]}`}>B) {wrong[0]}</label>
				</div>

				<div>
					<input type="radio" id={`${wrong[1]}`} value={wrong[1]}/>
					<label htmlFor={`${wrong[1]}`}>C) {wrong[1]}</label>
				</div>

				<div>
					<input type="radio" id={`${wrong[2]}`} value={wrong[2]}/>
					<label htmlFor={`${wrong[2]}`}>D) {wrong[2]}</label>
				</div>
				{/* <div>A) {correct}</div>
				<div>B) {wrong[0]}</div>
				<div>C) {wrong[1]}</div>
				<div>D) {wrong[2]}</div> */}
			</form>
		</QuestionContainer>
	)
}

const QuestionContainer = styled.div`
	margin: 6px 0px 6px 0px;
	font-size: 15px;
	.questions-display {
		margin: 10px 0px 10px 0px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		label {
			margin-left: 10px;
		}
	}
`;

export default Question
