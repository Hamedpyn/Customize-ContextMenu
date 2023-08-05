// Select DOM elements

let contextMenu = document.querySelector('#contextMenu')

// Handle 'contextmenu' right click event
document.addEventListener('contextmenu', (item) => {
    // Prevent default browser context menu
    item.preventDefault()
    // Show custom context menu
    contextMenu.style.display = 'block'
    // Position context menu under click location
    contextMenu.style.left = item.pageX + 'px'
    contextMenu.style.top = item.pageY + 'px'
})

// Hide context menu by any click on body
document.body.onclick = function () {
    contextMenu.style.display = 'none'
}