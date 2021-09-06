console.log('fk csdn')
// 重写copy事件，去除复制最后拼接的东西
let d = document.getElementsByClassName('blog-content-box')
d = Array.prototype.slice.call(d)
console.log(d)
d.forEach(cur => {
	// cur.removeEventListener('copy', e)
	cur.addEventListener('copy', (event) => {
		const selection = document.getSelection().toString();
		event.clipboardData.setData('text/plain', selection);
		event.preventDefault();
		event.stopPropagation();
		console.log(selection)
		console.log('remove fk csdn text')
	})
})
