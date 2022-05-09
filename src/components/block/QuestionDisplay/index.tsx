import React, { FC, useEffect, useState } from 'react'
// Components
import Question from 'components/block/Question';
import { QuestionType } from 'types/index';

import styled from 'styled-components';

interface IQuestionDisplayProps {
	data: QuestionType[];
	questionIndex: number;
}
const QuestionDisplay:FC<IQuestionDisplayProps> = props => {
	const { data, questionIndex } = props;

	useEffect(() => {
	}, [questionIndex]);

	return (
		<>
			<Question
				questionNumber={questionIndex}
				question={data[questionIndex]}
			/>
			<Question
				questionNumber={questionIndex+1}
				question={data[questionIndex+1]}
			/>
		</>
	)
}

const QuestionsContainer = styled.div`

`;

export default QuestionDisplay
