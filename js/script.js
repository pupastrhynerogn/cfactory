// 買家秀輪播功能
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-img");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const totalImages = images.length;
    let index = 0;

    // 每列顯示 4 張圖片
    const visibleImages = 4;
    const imageWidth = 270; // 250px 寬 + 20px 間距

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    rightArrow.addEventListener("click", function() {
        if (index < totalImages - visibleImages) {
            index++;
            updateCarousel();
        }
    });

    leftArrow.addEventListener("click", function() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });
});

console.log("E廠網站已加載！");