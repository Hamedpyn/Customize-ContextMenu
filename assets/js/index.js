// Select DOM elements

let contextMenu = document.querySelector('#contextMenu')

document.addEventListener('contextmenu', item => {
    item.preventDefault()
    contextMenu.style.display = 'block'
    contextMenu.style.left = item.pageX + 'px'
    contextMenu.style.top = `${item.pageY}px`
})

document.body.onclick = function () {
    contextMenu.style.display = 'none'
}