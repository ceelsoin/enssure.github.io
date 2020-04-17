const ENV_DEV = true

if(ENV_DEV){
    require('./css/bootstrap.min.css');
    require('./css/styles.css');
}


document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        document.querySelector(".bar").classList.add("bar-ready");
        document.querySelector(".jumbo-title").classList.add("jumbo-title-ready");
        document.querySelector(".lead").classList.add("lead-ready");
    }
});