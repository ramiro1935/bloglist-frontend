import React, { useState } from 'react'
import Proptypes from 'prop-types'

const BlogForm = ({ createNewBlog }) => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [url, setUrl] = useState('')

	const handleSetTitle = e => {
		setTitle(e.target.value)
	}

	const handleSetAuthor = e => {
		setAuthor(e.target.value)
	}

	const handleSetUrl = e => {
		setUrl(e.target.value)
	}

	const handleCreateNewBlog = e => {
		e.preventDefault()
		const blog = {
			title,
			author,
			url,
		}
		createNewBlog(blog)
		setTitle('')
		setAuthor('')
		setUrl('')
	}
	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={handleCreateNewBlog}>
				<p>
					title: <input type='text' value={title} onChange={handleSetTitle} />
				</p>
				<p>
					author:
					<input type='text' value={author} onChange={handleSetAuthor} />
				</p>
				<p>
					url:
					<input type='text' value={url} onChange={handleSetUrl} />
				</p>
				<input type='submit' value={'create'} />
			</form>
		</div>
	)
}
BlogForm.propTypes = {
	user: Proptypes.object.isRequired,
	handleLogout: Proptypes.func.isRequired,
	createNewBlog: Proptypes.func.isRequired,
}
export default BlogForm
