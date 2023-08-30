const BottomingRefresh = (callback) => {
    let timer = null;
    window.addEventListener('scroll', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            let scrollTop = document.documentElement.scrollTop;
            let clientHeight = document.documentElement.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            if (scrollTop + clientHeight >= scrollHeight) {
                callback()
            }
        }, 100);
    })

}
export default BottomingRefresh