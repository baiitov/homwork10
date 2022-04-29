import React, { useState } from 'react'

const Expense = () => {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [input, setInput] = useState('')
	const titleHandler = (e) => {
		setTitle(e.target.value)
	}
	const inputHandler = (e) => {
		setDate(e.target.value)
	}
	const dateHandler = (e) => {
		setInput(e.target.value)
	}
	console.log(title)
	console.log(input)
	console.log(date)

	return (
		<div>
			<input value={title} onChange={titleHandler} type='text' />
			<input value={date} onChange={inputHandler} type='text' />
			<input value={input} onChange={dateHandler} type='text' />
		</div>
	)
}

export default Expense
