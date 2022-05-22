import React, { useEffect, useState } from 'react'
import data from '../../data/questions.json';
// Components
import QuestionDisplay from 'components/block/QuestionDisplay';
import Button from 'components/block/Button';

import * as S from './style'

const Practice = () => {
	const [questionDisplayIndex, setQuestionDisplayIndex] = useState<number>(0);
	const [answersFromUser, setAnswersFromUser] = useState<string[]>([]);

	const changeToPrev = () => {
		if(questionDisplayIndex != 0){
			setQuestionDisplayIndex(questionDisplayIndex-1);
		}
	}
	const changeToNext = () => {
		if(questionDisplayIndex != data.length){
			setQuestionDisplayIndex(questionDisplayIndex+1);
		}
	}

	return (
		<S.Container>
			<S.QuestionControllerPosition>
				<div className='controller-buttons'>
					<Button onClick={() => changeToPrev()}>{'<'}</Button>
					<Button onClick={() => changeToNext()}>{'>'}</Button>
				</div>
			</S.QuestionControllerPosition>

			<S.QuestionDisplayPosition>
				<QuestionDisplay
					data={data}
					questionIndex={questionDisplayIndex}
				/>
			</S.QuestionDisplayPosition>
		</S.Container>
	)
}

export default Practice
