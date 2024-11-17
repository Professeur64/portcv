//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnBtn = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnBtn);
        
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})


//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');



//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}


//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)


//opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})



//STELLANTIS زر عرض الصور 
const images = [
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-001.jpg.ximg.large.webp/d956adc0d3.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-002.jpg.ximg.large.webp/2ea69bde07.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/renault-editorial-etech-ev-058.jpg.ximg.large.webp/8e4e0971eb.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-003.jpg.ximg.large.webp/7345f8ef10.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/editorial/s319/black/r5-overview-008-1-desktop-black.jpg.ximg.largex2.webp/5fdee21b2f.webp",
  ];

  let currentIndex = 0;

  const showPopupButton = document.getElementById("showPopupButton");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopupButton");
  const popupImage = document.getElementById("popupImage");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  showPopupButton.addEventListener("click", () => {
    popup.style.display = "flex"; // عرض النافذة المنبثقة
  });

  closePopupButton.addEventListener("click", () => {
    popup.style.display = "none"; // إخفاء النافذة المنبثقة
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // الانتقال إلى الصورة التالية
    updateImage();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // الانتقال إلى الصورة السابقة
    updateImage();
  });

  function selectImage(index) {
    currentIndex = index; // تحديث الفهرس بناءً على الصورة المصغرة التي تم الضغط عليها
    updateImage();
    popup.style.display = "flex"; // فتح النافذة المنبثقة
  }

  function updateImage() {
    popupImage.src = images[currentIndex]; // تحديث مصدر الصورة
  }

  // إغلاق النافذة المنبثقة عند النقر في أي مكان خارج الصورة
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none"; // إخفاء النافذة المنبثقة
    }
  });



// OCP زر عرض الصور 
const imagesocp = [
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-001.jpg.ximg.large.webp/d956adc0d3.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-002.jpg.ximg.large.webp/2ea69bde07.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/renault-editorial-etech-ev-058.jpg.ximg.large.webp/8e4e0971eb.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-003.jpg.ximg.large.webp/7345f8ef10.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/editorial/s319/black/r5-overview-008-1-desktop-black.jpg.ximg.largex2.webp/5fdee21b2f.webp",
  ];

  let currentIndexocp = 0;

  const showPopupButtonocp = document.getElementById("showPopupButtonocp");
  const popupocp = document.getElementById("popupocp");
  const closePopupButtonocp = document.getElementById("closePopupButtonocp");
  const popupImageocp = document.getElementById("popupImageocp");
  const nextButtonocp = document.getElementById("nextButtonocp");
  const prevButtonocp = document.getElementById("prevButtonocp");

  showPopupButtonocp.addEventListener("click", () => {
    popupocp.style.display = "flex"; // عرض النافذة المنبثقة
  });

  closePopupButtonocp.addEventListener("click", () => {
    popupocp.style.display = "none"; // إخفاء النافذة المنبثقة
  });

  nextButtonocp.addEventListener("click", () => {
    currentIndexocp = (currentIndexocp + 1) % imagesocp.length; // الانتقال إلى الصورة التالية
    updateImageocp();
  });

  prevButtonocp.addEventListener("click", () => {
    currentIndexocp = (currentIndexocp - 1 + imagesocp.length) % imagesocp.length; // الانتقال إلى الصورة السابقة
    updateImageocp();
  });


  function updateImageocp() {
    popupImageocp.src = imagesocp[currentIndexocp]; // تحديث مصدر الصورة
  }

  // إغلاق النافذة المنبثقة عند النقر في أي مكان خارج الصورة
  popupocp.addEventListener("click", (event) => {
    if (event.target === popupocp) {
      popupocp.style.display = "none"; // إخفاء النافذة المنبثقة
    }
  });


  
//garage زر عرض الصور 
const imagesgarage = [
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-001.jpg.ximg.large.webp/d956adc0d3.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-002.jpg.ximg.large.webp/2ea69bde07.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/renault-editorial-etech-ev-058.jpg.ximg.large.webp/8e4e0971eb.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-003.jpg.ximg.large.webp/7345f8ef10.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/editorial/s319/black/r5-overview-008-1-desktop-black.jpg.ximg.largex2.webp/5fdee21b2f.webp",
  ];

  let currentIndexgarage = 0;

  const showPopupButtongarage = document.getElementById("showPopupButtongarage");
  const popupgarage = document.getElementById("popupgarage");
  const closePopupButtongarage = document.getElementById("closePopupButtongarage");
  const popupImagegarage = document.getElementById("popupImagegarage");
  const nextButtongarage = document.getElementById("nextButtongarage");
  const prevButtongarage = document.getElementById("prevButtongarage");

  showPopupButtongarage.addEventListener("click", () => {
    popupgarage.style.display = "flex"; // عرض النافذة المنبثقة
  });

  closePopupButtongarage.addEventListener("click", () => {
    popupgarage.style.display = "none"; // إخفاء النافذة المنبثقة
  });

  nextButtongarage.addEventListener("click", () => {
    currentIndexgarage = (currentIndexgarage + 1) % imagesgarage.length; // الانتقال إلى الصورة التالية
    updateImagegarage();
  });

  prevButtongarage.addEventListener("click", () => {
    currentIndexgarage = (currentIndexgarage - 1 + imagesgarage.length) % imagesgarage.length; // الانتقال إلى الصورة السابقة
    updateImagegarage();
  });


  function updateImagegarage() {
    popupImagegarage.src = imagesgarage[currentIndexgarage]; // تحديث مصدر الصورة
  }

  // إغلاق النافذة المنبثقة عند النقر في أي مكان خارج الصورة
  popupgarage.addEventListener("click", (event) => {
    if (event.target === popupgarage) {
      popupgarage.style.display = "none"; // إخفاء النافذة المنبثقة
    }
  });



  // ifmia زر عرض الصور
  const imagesifmia = [
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-001.jpg.ximg.large.webp/d956adc0d3.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-002.jpg.ximg.large.webp/2ea69bde07.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/renault-editorial-etech-ev-058.jpg.ximg.large.webp/8e4e0971eb.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-003.jpg.ximg.large.webp/7345f8ef10.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/editorial/s319/black/r5-overview-008-1-desktop-black.jpg.ximg.largex2.webp/5fdee21b2f.webp",
  ];

  let currentIndexifmia = 0;

  const showPopupButtonifmia = document.getElementById("showPopupButtonifmia");
  const popupifmia = document.getElementById("popupifmia");
  const closePopupButtonifmia = document.getElementById("closePopupButtonifmia");
  const popupImageifmia = document.getElementById("popupImageifmia");
  const nextButtonifmia = document.getElementById("nextButtonifmia");
  const prevButtonifmia = document.getElementById("prevButtonifmia");

  showPopupButtonifmia.addEventListener("click", () => {
    popupifmia.style.display = "flex"; // عرض النافذة المنبثقة
  });

  closePopupButtonifmia.addEventListener("click", () => {
    popupifmia.style.display = "none"; // إخفاء النافذة المنبثقة
  });

  nextButtonifmia.addEventListener("click", () => {
    currentIndexifmia = (currentIndexifmia + 1) % imagesifmia.length; // الانتقال إلى الصورة التالية
    updateImageifmia();
  });

  prevButtonifmia.addEventListener("click", () => {
    currentIndexifmia = (currentIndexifmia - 1 + imagesifmia.length) % imagesifmia.length; // الانتقال إلى الصورة السابقة
    updateImageifmia();
  });


  function updateImageifmia() {
    popupImageifmia.src = imagesifmia[currentIndexifmia]; // تحديث مصدر الصورة
  }

  // إغلاق النافذة المنبثقة عند النقر في أي مكان خارج الصورة
  popupifmia.addEventListener("click", (event) => {
    if (event.target === popupifmia) {
      popupifmia.style.display = "none"; // إخفاء النافذة المنبثقة
    }
  });



  //ista زر عرض الصور 
  const imagesista = [
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-001.jpg.ximg.large.webp/d956adc0d3.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-002.jpg.ximg.large.webp/2ea69bde07.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/renault-editorial-etech-ev-058.jpg.ximg.large.webp/8e4e0971eb.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/after-sales/maintenance/aftersales-maintenance-003.jpg.ximg.large.webp/7345f8ef10.webp",
    "https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/editorial/s319/black/r5-overview-008-1-desktop-black.jpg.ximg.largex2.webp/5fdee21b2f.webp",
  ];

  let currentIndexista = 0;

  const showPopupButtonista = document.getElementById("showPopupButtonista");
  const popupista = document.getElementById("popupista");
  const closePopupButtonista = document.getElementById("closePopupButtonista");
  const popupImageista = document.getElementById("popupImageista");
  const nextButtonista = document.getElementById("nextButtonista");
  const prevButtonista = document.getElementById("prevButtonista");

  showPopupButtonista.addEventListener("click", () => {
    popupista.style.display = "flex"; // عرض النافذة المنبثقة
  });

  closePopupButtonista.addEventListener("click", () => {
    popupista.style.display = "none"; // إخفاء النافذة المنبثقة
  });

  nextButtonista.addEventListener("click", () => {
    currentIndexista = (currentIndexista + 1) % imagesista.length; // الانتقال إلى الصورة التالية
    updateImageista();
  });

  prevButtonista.addEventListener("click", () => {
    currentIndexista = (currentIndexista - 1 + imagesista.length) % imagesista.length; // الانتقال إلى الصورة السابقة
    updateImageista();
  });


  function updateImageista() {
    popupImageista.src = imagesista[currentIndexista]; // تحديث مصدر الصورة
  }

  // إغلاق النافذة المنبثقة عند النقر في أي مكان خارج الصورة
  popupista.addEventListener("click", (event) => {
    if (event.target === popupista) {
      popupista.style.display = "none"; // إخفاء النافذة المنبثقة
    }
  });


  //butten video DEKRA
  const button = document.querySelector(".btn-video button");
        const close = document.querySelector(".close");
        const trailer = document.querySelector(".trailer");
        const iframe = document.getElementById("videoFrame");

        button.addEventListener('click', () => {
            trailer.style.visibility = "visible";
            trailer.style.opacity = 1;
        });

        // إخفاء نافذة الفيديو عند النقر على زر الإغلاق
        close.addEventListener('click', () => {
            trailer.style.visibility = "hidden";
            trailer.style.opacity = 0;

            // إيقاف الفيديو باستخدام YouTube API
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });

        // إخفاء نافذة الفيديو عند النقر على خلفية النافذة
        trailer.addEventListener('click', (event) => {
            if (event.target === trailer) { // التأكد من أن النقر كان على الخلفية وليس على الفيديو
                trailer.style.visibility = "hidden";
                trailer.style.opacity = 0;
                
                // إيقاف الفيديو باستخدام YouTube API
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });



  //butten video DEKRA
  // قائمة الفيديوهات
const videos = ["https://cdn.group.renault.com/ren/master/renault-new-cars/editorial/e-tech/e-tech-ev/e-tech-evrenault-editorial-etech-ev-001-mp4-desktop-001.mp4.asset.mp4/f69807490d.mp4", "video2.mp4", "video3.mp4"];
let currentVideoIndex = 0;

// دالة لفتح النافذة المنبثقة
function openPopuppost() {
    document.querySelector('.popuppost').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    loadVideo();
}

// دالة لإغلاق النافذة المنبثقة
function closePopuppost() {
    document.querySelector('.popuppost').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

// دالة لتحميل الفيديو الحالي
function loadVideo() {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.load();
}

// دالة للانتقال إلى الفيديو التالي
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo();
}

// دالة للعودة إلى الفيديو السابق
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    loadVideo();
}
