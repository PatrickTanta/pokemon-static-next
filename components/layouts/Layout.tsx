import { FC } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
}


const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon' }</title>
        <meta name="author" content="Patrick Tanta" />
        <meta name="description" content="Informacion sobre el pokemon XXXXX" />
        <meta name="keywords" content="XXXXX, pokemon, pokedex" />
      </Head>

      <Navbar />
      
      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}

export default Layout;
