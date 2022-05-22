import React, { Children, FC } from 'react'
import Link from 'next/link';

import styled from 'styled-components';

interface IMainLayoutProps {}
const MainLayout:FC<IMainLayoutProps> = ({children}) => {
	return (
		<Layout>
			<div className='header'>
				<div className='header-content'>
					<span className='title'>Exadmision App</span>
					<div className='right-content'>
						<Link href="">
							<a>Acerca de nosotros</a>
						</Link>
					</div>
				</div>
			</div>
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
		display: flex;
		align-items: center;
	}
	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10px;
		padding-right: 10px;
		width: 100%;
		color: white;
		text-underline: 1px;
	}
	.content {
	}
	.right-content{
		display: flex;
		justify-content: end;
		font-size: 20px;
		a:visited {
			color: white;
		}
	}
	.title {
		font-size: 24px;
		color: white;
	}
	.content {
		position: relative;
		// padding: 0px 60px;
		height: 100%;
	}
`;

export default MainLayout
