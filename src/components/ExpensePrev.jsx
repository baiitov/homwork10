import React from 'react'
import { useState } from 'react'
const ExpensePrev = () => {
	const [title, setTitle] = useState('')
	const [value, setValue] = useState('')
	const [input, setInput] = useState('')
	const titleHandler = (e) => {
		setTitle((prev) => {
			prev = e.target.value
			return prev
		})
	}
	const valueHandler = (e) => {
		setValue((prev) => {
			prev = e.target.value
			return prev
		})
	}
	const inputHandler = (e) => {
		setInput((prev) => {
			prev = e.target.value
			return prev
		})
	}
	console.log(title)
	console.log(value)
	console.log(input)

	return (
		<div>
			<input onChange={titleHandler} type='text' />
			<input onChange={valueHandler} type='text' />
			<input onChange={inputHandler} type='text' />
		</div>
	)
}

export default ExpensePrev
