let slider= tns({
    container:".my-slider","slideBy":"1",
    "speed":400,
    "nav":false,
    autoplay:true,
    controls: false,
    autoplayButtonOutput:false,
    responsive:{
        1600:{
            item:3,
            gutter:20
        },
        1024:{
            item:2,
            gutter:20
        },
        768:{
            item:1,
            gutter:20
        }
    }
})