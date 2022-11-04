//  async function removeImageBackground(image) {
//      const backgroundColor = { red: 255, green: 255, blue: 255 };
//      const threshold = 10;

//      const imageElement = new Image();
//      imageElement.src = image;

//      await new Promise(function(resolve) { imageElement.addEventListener('load', resolve); });

//      var canvas = document.createElement('canvas');
//      canvas.width = imageElement.naturalWidth;
//      canvas.height = imageElement.naturalHeight;

//      var ctx = canvas.getContext('2d');
//      ctx.drawImage(imageElement, 0, 0);
//      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//      for (var i = 0; i < imageData.data.length; i += 4) {
//          const red = imageData.data[i];
//          const green = imageData.data[i + 1];
//          const blue = imageData.data[i + 2];
//          if (Math.abs(red - backgroundColor.red) < threshold &&
//              Math.abs(green - backgroundColor.green) < threshold &&
//              Math.abs(blue - backgroundColor.blue) < threshold) {
//              imageData.data[i + 3] = 0;
//          }
//      }

//      ctx.putImageData(imageData, 0, 0);
//      return canvas.toDataURL(`image/png`);
//  }

//  function displayImage(pic) {

//      let divLocation = document.getElementById("imgDiv");
//      let imgElement = document.createElement("img");
//      imgElement.src = pic
//      divLocation.append(imgElement);
//  }

//  Pic = removeImageBackground('/images/students2.jpeg');
//  //  displayImage(Pic);

//change the backgrounf color of the navbar on the scroll 

const navbar = document.querySelector('nav');
//une methode anonyme
window.addEventListener('scroll', () => {
    //Methode 1:
    //size of the scroll
    // const scrollHeight = window.pageYOffset;
    // //size of the nav
    // const navHeight = navbar.getBoundingClientRect().height;
    // if (scrollHeight > navHeight) {
    //     navbar.style.background = `#a30a0f`;
    // } else if (scrollHeight == 0) {
    //     navbar.style.background = `#4C536D`;
    // }

    //Methode 2:
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //pour fermer les autres question lorsqu'on selectionne une


        //on selectionne la classe i qui est dans la classe faq rt non dans tout le document
        const icon = faq.querySelector('i');
        //Permuter entre les icons : en utilisant the classname
        if (icon.className === 'uil uil-plus-square') {
            icon.className = "uil uil-minus-square";

        } else {

            icon.className = "uil uil-plus-square";

        }
        faqs.forEach(function(item) {
            if (item !== faq) {
                item.classList.remove('open');
                item.querySelector('i').className = "uil uil-plus-square";

            }
        });
    })


})

// nav toggle 
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav_menu');

navToggle.addEventListener('click', () => {
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");

        navToggle.innerHTML = ` <button type="button" class="nav-toggle">
        <i class="fas fa-bars"></i></button>`;
        navToggle.style.fontSize = "1.8rem";
        // background: "transparent";
        // border-color: "transparent";
        // cursor: "pointer";
        // transition: "all 0.3s linear";
        // color:"aliceblue";


    } else {
        links.classList.add("show-links");
        navToggle.innerHTML = ` <button type="button" class="nav-toggle">
        <i class="fas fa-times"></i></button>`;

    }

})