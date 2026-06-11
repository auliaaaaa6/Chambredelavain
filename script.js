// ======================
// QUANTITY
// ======================
let qty = 1;

function changeQty(delta) {
  qty = Math.max(1, qty + delta);
  document.getElementById("qty-val").textContent = qty;
}

// ======================
// NAVIGATION
// ======================
function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  if (page === "home" || page === "shop") {
    document.getElementById("page-home").classList.add("active");
  } else if (page === "about") {
    document.getElementById("page-about").classList.add("active");
  }

  window.scrollTo(0, 0);
}

// ======================
// DETAIL PAGE
// ======================
function setMainImg(el) {
  document.getElementById("detail-img-main").src = el.src;
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

function goDetail(img1, img2, img3, name, price, isNew) {
  const imgs = [img1, img2, img3];
// Mobile Gallery 
  document.getElementById("detail-img").src = "image2/" + img1;
  document.getElementById("detail-img-2").src = "image2/" + img2;
  document.getElementById("detail-img-3").src = "image2/" + img3;
// Dekstop Gallery
  const thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((t, i) => { t.src = "image2/" + imgs[i]; });
  document.getElementById("detail-img-main").src = "image2/" + img1;
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[0].classList.add("active");

  document.getElementById("detail-title").textContent = name;
  document.getElementById("detail-price").textContent = price;
  document.querySelector(".detail-badge.new").style.display = isNew ? "inline-block" : "none";

  // Reset qty
  qty = 1;
  document.getElementById("qty-val").textContent = 1;

  // Reset size selection
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  const defaultSize = document.querySelector(".size-btn:nth-child(2)");
  if (defaultSize) defaultSize.classList.add("active");

  // Show detail page
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-detail").classList.add("active");

  window.scrollTo(0, 0);
}

function goHome() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-home").classList.add("active");
  window.scrollTo(0, 0);
}

// ======================
// SIZE BUTTON
// ======================
document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ======================
// SIDEBAR
// ======================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// Main hamburger (home page)
const menuBtn = document.getElementById("menuBtn");
if (menuBtn) menuBtn.addEventListener("click", openSidebar);

// About page hamburger
const menuBtnAbout = document.getElementById("menuBtnAbout");
if (menuBtnAbout) menuBtnAbout.addEventListener("click", openSidebar);

// Close button
const closeBtn = document.getElementById("closeBtn");
if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

// Overlay click
if (overlay) overlay.addEventListener("click", closeSidebar);

const gallery = document.getElementById("detail-gallery");
const dots = document.querySelectorAll(".gallery-dots span");

gallery.addEventListener("scroll", () => {
  const index = Math.round(gallery.scrollLeft / gallery.offsetWidth);
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
});