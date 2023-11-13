const productList = JSON.parse(localStorage.getItem('products')) || [];
const gamesCarousel = document.querySelector('.games-carousel');

productList.forEach(function (product, index) {
    // Tạo một div cho mỗi sản phẩm
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.id = `game-${index + 1}`;

    // Tạo phần ảnh của sản phẩm
    const gameCoverDiv = document.createElement('div');
    gameCoverDiv.classList.add('game-cover');
    const gameImage = document.createElement('img');
    gameImage.src = product.image;
    gameImage.alt = product.name;
    gameCoverDiv.appendChild(gameImage);

    // Tạo thông tin sản phẩm
    const gameInfoDiv = document.createElement('div');
    gameInfoDiv.classList.add('game-info');
    const gameTitle = document.createElement('p');
    gameTitle.classList.add('game-title');
    gameTitle.innerHTML = `Tên sản phẩm
        <lord-icon
            class="game-lord-icon"
            data-alternate="false"
            src="https://cdn.lordicon.com/xyboiuok.json"
            trigger="hover"
            colors="primary:#e83a30"
        >
        </lord-icon>`;
    const gameViewership = document.createElement('p');
    gameViewership.classList.add('game-viewership');
    gameViewership.textContent = 'Hiện chưa có đánh giá';

    gameInfoDiv.appendChild(gameTitle);
    gameInfoDiv.appendChild(gameViewership);

    // Tạo phần sale (nếu có)
    const gameCategoriesDiv = document.createElement('div');
    gameCategoriesDiv.classList.add('game-categories');
    if (product.sale) {
        const saleSpan = document.createElement('span');
        saleSpan.textContent = 'sale';
        gameCategoriesDiv.appendChild(saleSpan);
    }

    // Gộp các phần lại với nhau
    gameDiv.appendChild(gameCoverDiv);
    gameDiv.appendChild(gameInfoDiv);
    gameDiv.appendChild(gameCategoriesDiv);

    // Thêm sản phẩm vào gamesCarousel
    gamesCarousel.appendChild(gameDiv);
});