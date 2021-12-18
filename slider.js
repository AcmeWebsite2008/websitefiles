    var images = [
        "https://cdn.jsdelivr.net/gh/AcmeWebsite2008/websitefiles/1.jpg",
        "https://cdn.jsdelivr.net/gh/AcmeWebsite2008/websitefiles/2.jpg",
        "https://cdn.jsdelivr.net/gh/AcmeWebsite2008/websitefiles/3.jpg",
        "https://cdn.jsdelivr.net/gh/AcmeWebsite2008/websitefiles/4.jpg"
    ];
    function loadImg(i){
        if(images[i] != undefined){
            var img = new Image();
            img.src = images[i];
            img.onload = function(){ // detect if image has been loaded
                i++;
                loadImg(i);
            }
        }
        if(images.length == i) // adding class 'loaded' when all images finished with loading
            document.getElementsByClassName("slider")[0].classList.add("loaded");
    }
    loadImg(0);