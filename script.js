const container = document.getElementById('container')

for (let index = 0; index < 256; index++) {
	const item = document.createElement('div')
	item.className = 'item'
	container.append(item)
}
