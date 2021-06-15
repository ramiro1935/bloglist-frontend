import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import { BlogDetail } from './Blog'

test('renders update blog', () => {
	const updateBlog = jest.fn()
	const deleteBlog = jest.fn()
	const blog = {
		title: 'title react',
		author: 'author test',
		url: 'http://url.com',
		likes: 23,
	}
	const component = render(
		<BlogDetail blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
	)
	const button = component.container.querySelector('button')
	console.log(prettyDOM(button))
})
