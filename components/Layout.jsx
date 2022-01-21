import Header from "./Header/Header"
import Head from 'next/head'
import Footer from "./Footer"
import Nav from "./Nav/Nav"

export default function Layout({children, singlePage}) {
	const isSinglePage = singlePage ? "singlePage" : "";
	return (
		<div className="layout">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link 
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:ital,wght@1,500&display=swap"
					rel="stylesheet"
				/>
				<title>gameCommerce</title>
			</Head>
			<Header/>
			<Nav/>
			<div className={`content ${isSinglePage}`}>
				{children}
			</div>
			<Footer />
		</div>
	)
}