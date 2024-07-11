const imageSources = [
    'download.jpeg','bk.image.jpeg','img-1.jpeg','img-2.jpeg',
    'img-3.png','img-4.jpeg','img-5.jpeg','img-10.jpeg',
    'img-9.jpeg','img-8.jpeg'
];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}

// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 200);