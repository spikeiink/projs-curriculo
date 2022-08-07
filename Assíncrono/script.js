const BASE_URL = "https://api.thecatapi.com/v1/images/search/";



const getCats = async () => {
		const data = await fetch(BASE_URL)
        .then(res=> res.json())
        .catch(e => console.log(e))

        return data[0].url;
        
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);