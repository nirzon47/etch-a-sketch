const container = document.getElementById('container')
let mode = 'black' // default mode is black

// Function that changes the mode to RGB
function changeModeToRGB() {
	mode = 'rgb'
}

// Function that changes the mode to Black
function changeModeToBlack() {
	mode = 'black'
}

// Removes all the items created inside the #container before for a fresh start
function removeAllChildren() {
	while (container.firstChild) {
		container.removeChild(container.firstChild)
	}
}

// Generates random RGB class and returns it
function generateRandomRGBClass() {
	const RGBList = [
		'white',
		'red',
		'green',
		'blue',
		'yellow',
		'purple',
		'pink',
		'orange',
	]
	return `${RGBList[Math.floor(Math.random() * RGBList.length)]}`
}

// Function to generate a new sketch
function generateNewSketch() {
	// Prompting user for a new grid size
	const gridSize = prompt('Enter new grid size (Max input: 100, Min input: 1)')

	// Removes the items from previous sketch
	removeAllChildren()

	// Conditions to check for human errors
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

	// Creates the grid
	for (let index = 0; index < gridSize * gridSize; index++) {
		const item = document.createElement('div')

		// Adds class name 'item' to each children
		item.className = 'item'

		// Determines the width and height of each item from the set height and width of the canvas
		item.style.width = `${50 / gridSize}vh`
		item.style.height = `${50 / gridSize}vh`

		// Checks for hover
		item.addEventListener('mouseover', mouseOver)

		// Function that changes the background color depending on the class it adds
		function mouseOver() {
			if (mode === 'black') {
				item.className = 'item'
				item.classList.add('black')
			} else if (mode === 'rgb') {
				item.className = 'item'
				item.classList.add(generateRandomRGBClass())
			}
		}

		// Appends the new item in the #container
		container.append(item)
	}
}

// Function that removes the classes that change the background color in order to start fresh
function reset() {
	let item = document.getElementsByClassName('item')

	for (let i = 0; i < item.length; i++) {
		item[i].className = 'item'
	}
}
