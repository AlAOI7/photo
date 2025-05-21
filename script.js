// التقاط جميع الصور في المعرض
const images = document.querySelectorAll('.gallery img');
const fullscreen = document.getElementById('fullscreen-view');
const fullscreenImg = document.getElementById('fullscreen-img');

// فتح الصورة عند النقر
images.forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    fullscreen.style.display = 'flex';
  });
});

// إغلاق العرض
function closeImage() {
  fullscreen.style.display = 'none';
  fullscreenImg.src = '';
}
