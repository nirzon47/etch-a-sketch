const container = document.getElementById('container')

for (let index = 0; index < 256; index++) {
	const item = document.createElement('div')
	item.className = 'item'

	item.addEventListener('mouseover', mouseOver)

	function mouseOver() {
		item.classList.add('active')
	}

	container.append(item)
}

const item = document.getElementsByClassName('item')
