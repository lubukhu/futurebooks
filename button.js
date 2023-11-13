// $(document).ready(function () {
//   // Xử lý khi click vào liên kết có ID là "pageLink"
//   $("a#pageLink").click(function () {
//     $("a#pageLink").removeClass("active");
//     $(this).addClass("active");
//   });

//   // Xử lý khi click vào nút "btn-show-left-area"
//   $(".btn-show-left-area").click(function () {
//     $(".left-area").toggleClass("show");
//   });

//   // Xử lý khi click vào nút "btn-show-right-area"
//   $(".btn-show-right-area").click(function () {
//     $(".right-area").toggleClass("show");
//   });

//   // Xử lý khi click vào nút "btn-close-right"
//   $(".btn-close-right").click(function () {
//     $(".right-area").removeClass("show");
//   });

//   // Xử lý khi click vào nút "btn-close-left"
//   $(".btn-close-left").click(function () {
//     $(".left-area").removeClass("show");
//   });

//   // Xử lý sự kiện cuộn trang
//   $('.main-area').scroll(function () {
//     if ($('.main-area').scrollTop() >= 88) {
//       $('div.main-area-header').addClass('fixed');
//     } else {
//       $('div.main-area-header').removeClass('fixed');
//     }
//   });
// });



    //   window.onload = function () {
    //       updateCart();
    //       showProducts();
    //   }
  
    //   function showProducts() {
    //       const productsContainer = document.getElementById("products");
    //       productsContainer.innerHTML = "";
  
    //       if (localStorage.getItem("products") !== null) {
    //           const products = JSON.parse(localStorage.getItem("products"));
  
    //           products.forEach(product => {
    //               const productDiv = document.createElement("div");
    //               productDiv.className = "product";
    //               productDiv.innerHTML = `
    //                   <h3>${product.product}</h3>
    //                   <p>Giá: $${product.price}</p>
    //                   <button onclick="addToCart('${product.product}', ${product.price})">Thêm vào giỏ hàng</button>
    //               `;
  
    //               productsContainer.appendChild(productDiv);
    //           });
    //       }
    //   }
    const productList = JSON.parse(localStorage.getItem('products')) || [];
        
                
    productList.forEach(function (product) {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price}</p>
        `;
        document.getElementById("product-list").appendChild(productItem);
    });
    
    const btnShowRightArea = document.querySelector('.btn-show-right-area');
    const rightArea = document.querySelector('.right-area');

    let isRightAreaVisible = false; // Ban đầu ẩn giao diện bên phải

    btnShowRightArea.addEventListener('click', () => {
      if (isRightAreaVisible) {
        // Nếu đang hiển thị, ẩn nó đi
        rightArea.style.transform = 'translateX(100%)';
        rightArea.style.opacity = 0;
      } else {
        // Nếu đang ẩn, hiển thị nó
        rightArea.style.transform = 'translateX(0)';
        rightArea.style.opacity = 1;
      }
      
      // Cập nhật trạng thái hiển thị
      isRightAreaVisible = !isRightAreaVisible;
    });


    
    

