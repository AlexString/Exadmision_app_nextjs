import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 100%;
	// padding: 20px 20px 20px 20px;
	padding: 50px 70px;
`;

export const QuestionControllerPosition = styled.div`
	height: 70px;
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	justify-content: end;
	.controller-buttons {
		display: flex;
		gap: 10px;
		width: 100px;
	}
`;

export const QuestionDisplayPosition = styled.div`
	height: 400px;
	width: 100%;
`;
