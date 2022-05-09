import React, { Children, FC } from 'react'

import styled from 'styled-components';

interface IMainLayoutProps {}
const MainLayout:FC<IMainLayoutProps> = ({children}) => {
	return (
		<Layout>
			<div>{children}</div>
		</Layout>
	)
}

const Layout = styled.div`
	position: relative;
	padding: 50px 60px;
	height: 100%;
`;

export default MainLayout
