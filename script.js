const container = document.getElementById('container')

function generateNewSketch() {
	const gridSize = prompt('Enter new grid size (Max input: 100, Min input: 1)')
	removeAllChildren()

	if (gridSize > 100) {
		alert('Grid size too big, try to limit input to 100')
		return
	} else if (gridSize < 1) {
		alert('The input is less than 1, minimum grid size is 1')
		return
	} else if (!Number(gridSize)) {
		alert('The input is not a number, try again')
		return
	}

	for (let index = 0; index < gridSize * gridSize; index++) {
		const item = document.createElement('div')
		item.className = 'item'

		item.style.width = `${50 / gridSize}vh`
		item.style.height = `${50 / gridSize}vh`

		item.addEventListener('mouseover', mouseOver)

		function mouseOver() {
			item.classList.add('active')
		}

		container.append(item)
	}
}

function reset() {
	let item = document.getElementsByClassName('item')

	for (let i = 0; i < item.length; i++) {
		item[i].classList.remove('active')
	}
}

function removeAllChildren() {
	while (container.firstChild) {
		container.removeChild(container.firstChild)
	}
}
