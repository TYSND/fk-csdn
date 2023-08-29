console.log('fk csdn')
// let dialogPop = document.getElementById('content_views');
// let copyFunc = getEventListeners(dialogPop).copy[0].listener;
// dialogPop.removeEventListener('copy', copyFunc);
let dialogPop = document.getElementById('content_views');

dialogPop.addEventListener('copy', (event) => {
	event.preventDefault();
	// event.stopPropagation();
	console.log('remove fk csdn login dialog')
	const selection = document.getSelection().toString();
	event.clipboardData.setData('text/plain', selection);
	event.preventDefault();
	event.stopPropagation();
	console.log(selection)
	console.log('remove fk csdn text')
}, true)

// 重写copy事件，去除复制最后拼接的东西
// let d = document.getElementsByTagName('code')
// d = Array.prototype.slice.call(d)
// console.log(d)
// d.forEach(cur => {
	// cur.addEventListener('copy', (event) => {
		// const selection = document.getSelection().toString();
		// event.clipboardData.setData('text/plain', selection);
		// event.preventDefault();
		// event.stopPropagation();
		// console.log(selection)
		// console.log('remove fk csdn text')
	// })
// })


// window.addEventListener('copy', (event) => {
	// const selection = document.getSelection().toString();
	// event.clipboardData.setData('text/plain', selection);
	// event.preventDefault();
	// event.stopPropagation();
	// console.log(selection)
	// console.log('remove fk csdn text')
// })