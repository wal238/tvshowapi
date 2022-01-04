const form = document.querySelector('#searchform');
let img;
let rmD;

//result.show.name


form.addEventListener('submit', async function (e) {
    //img = document.querySelectorAll('IMG');
    rmD = document.querySelectorAll('.col');
    /*
    while(rmD.hasChildElements()) {
        rmD.removeChild(rmD.lastChild);
    } */

    for (let d of rmD) {
        d.remove();
    }
    /*
    for(let images of img) {
        images.remove();
    } */

    e.preventDefault();
    const searchInfo = form.elements.query.value;
    document.querySelector('#showS').innerHTML="Showing Results For " + searchInfo.bold() + "...";
    const config = { params: { q: searchInfo}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    addShowImages(res.data);
    form.elements.query='';
})

const addShowImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const img= document.createElement('IMG');
            img.src = result.show.image.medium;
            img.classList.add("card-img-top");



            const h5 = document.createElement('h5');
            h5.classList.add("card-title");
            h5.innerHTML = result.show.name;

            const div2 = document.createElement('div');
            div2.classList.add("card-body");
            const div1 = document.createElement('div');
            div1.classList.add("card");
            div1.style="width: 18rem;"

            const divC = document.createElement('div');
            divC.classList.add("col");

            divC.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(div2);
            div2.appendChild(h5);

            document.getElementById("allShows").appendChild(divC);
        }
    }

}


