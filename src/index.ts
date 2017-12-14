import './style.css'

const head = document.head
const body = document.body

const style = (element: HTMLElement, style: string) => {
	element.setAttribute('style', style)
}

const append = (target: HTMLElement, element: HTMLElement) => {
	target.appendChild(element)
}

const init = () => {
	const title = document.createElement('title')
	title.innerHTML = 'Symply'
	append(head, title)
}

const component = () => {
	const element = document.createElement('div')
	element.innerHTML = 'test'
	return element
}

init()
append(body, component())