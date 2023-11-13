// Function chung để thay đổi LordIcon
function toggleLordIcon(lordIcon) {
    // Lấy trạng thái hiện tại từ sessionStorage
    var isAlternate = JSON.parse(sessionStorage.getItem("lordIconState")) || false;

    // Thay đổi giá trị của thuộc tính data tùy thuộc vào trạng thái hiện tại
    lordIcon.setAttribute("data-alternate", !isAlternate);

    // Thay đổi giá trị của thuộc tính src tùy thuộc vào trạng thái hiện tại
    if (!isAlternate) {
        lordIcon.setAttribute("src", "https://cdn.lordicon.com/ulnswmkk.json");
    } else {
        lordIcon.setAttribute("src", "https://cdn.lordicon.com/xyboiuok.json");
    }

    // Lưu trạng thái mới vào sessionStorage
    sessionStorage.setItem("lordIconState", JSON.stringify(!isAlternate));
}

// Lấy tất cả các LordIcon và thêm sự kiện click cho chúng
var lordIcons = document.getElementsByClassName("game-lord-icon");

for (var i = 0; i < lordIcons.length; i++) {
    lordIcons[i].addEventListener("click", function() {
        toggleLordIcon(this);
    });
}

// Set initial state based on sessionStorage
var initialLordIconState = JSON.parse(sessionStorage.getItem("lordIconState")) || false;
if (initialLordIconState) {
    // Set the initial src based on the stored state
    lordIcons[0].setAttribute("src", "https://cdn.lordicon.com/ulnswmkk.json");
}