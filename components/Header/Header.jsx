import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import src from '../../public/headerIcon.png'
import Searcher from './Searcher'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/Menu'

export default function Header({children}) {
	const addClass = (divClass, newClass) => {
		document.querySelector(`.${divClass}`).classList.add(`${newClass}`)
		}
	return (
		<header>
			<Menu/>
			<div className='imageContainer'>
				<Image
					src={src}
					width={80}
					height={80}
					className='headerIcon'
				/>
			</div>
			<div className='titleContainer'>
				<h1 className='title'>GameCommerce</h1>
			</div>
			<Searcher/>
			<FontAwesomeIcon 
				icon={faBars}
				className='menuIcon'
				onClick={() => {
					let menu = document.querySelector('.menu') 
					let screen = document.querySelector('.menu-screen')	
					menu.classList.toggle('active')
					screen.classList.toggle('active')
				}}
			/>
		</header>
	)
}