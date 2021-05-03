let API_key = 'Uv3KYuiOFUoRWU2FPCmzkV0VJQTQ74N0';
const send = document.getElementById('send')
const search = document.getElementById('search')
const gif = document.querySelector('.gif')
gif.style.flexWrap = "wrap";

let xhr = new XMLHttpRequest();


send.addEventListener('click', (e) => {
    e.preventDefault();

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${search.value}&rating=g&limit=50&api_key=${API_key}`);
    xhr.send();
    xhr.responseType = 'json';
    let url = '';
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
        }
        let random = Math.floor(Math.random() * 50)


        let div = document.createElement('div')
        div.setAttribute('class', 'gifbox')
        
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.margin = "8px";

        gif.appendChild(div);


        let image = document.createElement('img');
        image.style.height = "200px";
        image.style.maxWidth = "200px";
        image.style.display = "block";
        image.style.borderRadius = "5px";

        url = xhr.response.data[random].images.original.url;
        image.setAttribute('src', `${url}`)
        image.style.display = "block";
        div.appendChild(image);

        let del = document.createElement('button');
        del.addEventListener('click', () => {
            div.remove();
        })
        del.style.padding = "10px 20px";
        del.style.marginTop = "8px";
        del.style.borderRadius = "5px";
        del.style.border = "1px solid #333";
        del.style.cursor = "pointer";
        del.textContent = "Delete"
        div.appendChild(del)
}
})


const deleteAll = document.querySelector('#deleteAll');
deleteAll.addEventListener('click', (e) => {
    let all = document.querySelectorAll('.gifbox');
    all.forEach(item => item.remove());
})