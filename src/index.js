const title = document.querySelector('.title')

document.addEventListener('scroll', () => {
    const value = window.scrollY

    title.style.marginTop = value * 0.3 + 'px'
})