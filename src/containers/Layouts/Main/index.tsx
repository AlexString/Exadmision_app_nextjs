import React, { Children, FC } from 'react'

import styled from 'styled-components';

interface IMainLayoutProps {}
const MainLayout:FC<IMainLayoutProps> = ({children}) => {
	return (
		<Layout>
			<div className='header'></div>
			<div className='content'>{children}</div>
		</Layout>
	)
}

const Layout = styled.div`
	.header {
		height: 80px;
		width: 100%;
		background-color: #006994;
		box-shadow: 2px 0px 3px;
	}
	.content {
		position: relative;
		padding: 50px 60px;
		height: 100%;
	}
`;

export default MainLayout
