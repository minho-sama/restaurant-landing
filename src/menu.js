function loadMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
    <img src = 'https://i.imgur.com/OfmLVqe.jpg'>
    <label id = 'item1'>
    <p id = 'name'> Pesto </p>
        <p id = 'caption'> The authentic, creamy pesto made with fresh basil and love</p>
        <p class = 'price'> 1390 HUF </p>
    </label>

    <img src = 'https://i.imgur.com/1eHvjkK.jpg'>
    <label id = 'item2'>
        <p id = 'name'> Pesto Deluxe </p>
        <p id = 'caption'> Premium pesto, for premium people </p>
        <p class = 'price'> 2190 HUF </p>
    </label>

    <img src = 'https://i.imgur.com/M7guuRd.jpg'>
    <label id = 'item3'>
        <p id = 'name'> Pesto Pasta </p>
        <p id = 'caption'> Home-made pesto pasta </p>
        <p class = 'price'> 990 HUF</p>
    </label>

    <img src = 'https://i.imgur.com/ks9xe9J.jpg'>
    <label id = 'item4'>
        <p id = 'name'> Red Pesto </p>
        <p id = 'caption'> Sun-dried tomato pesto from Italy</p>
        <p class = 'price'> 1890 HUF </p>
    </label>

    `
    document.querySelector('#content').appendChild(menu)
}

export {loadMenu}