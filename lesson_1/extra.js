let images = [
    'https://images.wallpaperscraft.ru/image/zdanie_neon_vyveski_152012_3840x2160.jpg',
	'img/1.jpg',
    'img/2.jpg', 
    'img/3.jpg',
    'img/4.jpg',
    'https://i.ytimg.com/vi/M7z5yMWmvx0/maxresdefault.jpg'
]

const checkImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve({path, status: 'error'});

        img.src = path;
    });


const showImg = (img) => {
    const container = document.getElementById('container');
    Promise.all( images.map( checkImage ) )
        .then(res => {
            for(let i = 0; i < res.length; i++){
                container.append(res[i])
            }
        })
        .catch(err=>console.log(err))

}

showImg(images);