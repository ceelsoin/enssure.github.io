document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        document.querySelector(".bar").classList.add("bar-ready");
        document.querySelector(".jumbo-title").classList.add("jumbo-title-ready");
        document.querySelector(".lead").classList.add("lead-ready");
    }
});