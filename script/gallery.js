var imageList = [
    {
        "thumb": "5B4525B3-187A-4D25-BA2A-90C25BD87580_Thumb.jpg",
        "full": "5B4525B3-187A-4D25-BA2A-90C25BD87580.jpg",
    },
    {
        "thumb": "00100sPORTRAIT_00100_BURST20190827193400738_COVER_Thumb.jpg",
        "full": "00100sPORTRAIT_00100_BURST20190827193400738_COVER.jpg"
    },
    {
        "thumb": "IMG_3047_Thumb.jpg",
        "full": "IMG_3047.jpg"
    },
    {
        "thumb": "IMG_3169_Thumb.jpg",
        "full": "IMG_3169.jpg"
    },
    {
        "thumb": "IMG_7417_Thumb.jpg",
        "full": "IMG_7417.jpg"
    },
    {
        "thumb": "IMG_7844_Thumb.jpg",
        "full": "IMG_7844.jpg"
    },
    {
        "thumb": "MVIMG_20180219_100450_Thumb.jpg",
        "full": "MVIMG_20180219_100450.jpg"
    },
    {
        "thumb": "MVIMG_20180218_144319_Thumb.jpg",
        "full": "MVIMG_20180218_144319.jpg"
    },
    {
        "thumb": "IMG_20180216_173459_Thumb.jpg",
        "full": "IMG_20180216_173459.jpg"
    },
    {
        "thumb": "IMG_0998_Thumb.jpg",
        "full": "IMG_0998.jpg"
    }
    
]

document.onload = buildGallery();

function buildGallery() {
    
		$.each(imageList, function() {

			$("#gallery").append('<a href = \images\\photos\\gallery\\'+this.full+' data-lightbox="gallery"><img style="margin:10px" width = 250px src =\images\\photos\\gallery\\'+this.thumb+'></a>');
		})

}