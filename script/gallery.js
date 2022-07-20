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
    },
    {
        "thumb": "10032021-JocelynKris-JuliaLuckettPhotography-9_thumb.jpg",
        "full": "10032021-JocelynKris-JuliaLuckettPhotography-9.jpg"
    },
    {
        "thumb": "10032021-JocelynKris-JuliaLuckettPhotography-27_thumb.jpg",
        "full": "10032021-JocelynKris-JuliaLuckettPhotography-27.jpg"
    },
    {
        "thumb": "10032021-JocelynKris-JuliaLuckettPhotography-42_thumb.jpg",
        "full": "10032021-JocelynKris-JuliaLuckettPhotography-42.jpg"
    },
    {
        "thumb": "10032021-JocelynKris-JuliaLuckettPhotography-45_thumb.jpg",
        "full": "10032021-JocelynKris-JuliaLuckettPhotography-45.jpg"
    },
    {
        "thumb": "10032021-JocelynKris-JuliaLuckettPhotography-50_thumb.jpg",
        "full": "10032021-JocelynKris-JuliaLuckettPhotography-50.jpg"
    },
    {
        "thumb": "IMG_4426_thumb.jpg",
        "full": "IMG_4426.JPG"
    },
    {
        "thumb": "IMG_5311_thumb.jpg",
        "full": "IMG_5311_thumb.JPG"
    },
    {
        "thumb": "IMG_5921_thumb.jpg",
        "full": "IMG_5921.JPG"
    },
    {
        "thumb": "IMG_6004_07252010_thumb.jpg",
        "full": "IMG_6004_07252010.JPG"
    },
    {
        "thumb": "sunset-with-kris_thumb.jpg",
        "full": "sunset-with-kris.jpg"
    }

    
]

document.onload = buildGallery();

function buildGallery() {
    
		$.each(imageList, function() {

			$("#gallery").append('<a href = \images\\photos\\gallery\\'+this.full+' data-lightbox="gallery"><img style="margin:10px" width = 250px src =\images\\photos\\gallery\\'+this.thumb+'></a>');
		})

}