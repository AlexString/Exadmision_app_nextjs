import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;
//															Especifica que recibe un prop 'position' o
//																Te sale error pero si funciona.
export const ButtonContainer = styled.div.attrs((props: {position: string}) => props)`
	position: absolute;
	width: 120px;
	height: 70px;
	top: 0;
	${props => `${props.position}`}: 0;
	padding: 10px;
`;

export const AppMenu = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;

	.app-logo {
		height: 300px;
		width: 200px;
		display: flex;
		justify-content: center;
	}

	.app-buttons {
		height: 100%;
		width: 150px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;

