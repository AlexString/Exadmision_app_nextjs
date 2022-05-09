import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { PageWithLayout } from 'types'
import MainLayout from 'containers/Layouts/Main'

import GlobalStyles from 'styles/global'

interface IAppProps {
  Component: PageWithLayout;
  pageProps: any;
}
const App:FC<IAppProps> = props => {
  const { Component, pageProps } = props;
  const Layout = Component.layout || MainLayout;

  return (
    <>
      <Head>
        <title>Exadmision App</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        <meta
          name="description"
          content="Aplicacion para practicar el examen de admision de la Universidad"
        />
      </Head>

      {/* Layout */}
      <Layout>
        <GlobalStyles/>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default App
