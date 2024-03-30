import {imagesdata} from "./imageapi.js";
document.addEventListener('DOMContentLoaded', ()=>{
    const imgBox = document.querySelector('.img-box');

const leftbtn = document.querySelector('.left-btn');
const rightbtn = document.querySelector('.right-btn');

const crouselImg = document.querySelector('.crousel-img img');

const crousel = document.querySelector('.crousel');

const crouselClose = document.querySelector('.crousel-close');

const crouselFooter = document.querySelector('.crousel-footer');



const openCrousel = (item) =>{
    alert(item.name);
}

imgBox.innerHTML = imagesdata.map((item, index)=>{
    return (
        `
            <div class="img img1">
                <img src="${item.url}" alt="">
            </div>
        `
    )
});
crouselFooter.innerHTML = imagesdata.map((item, index)=>{
    return (
        `
            <div class="crousel-footer-imgs">
                <img src="${item.url}" alt="">
            </div>
        `
    )
});


const images = document.querySelectorAll('.img1');
const crouselFooterImgs = document.querySelectorAll('.crousel-footer-imgs');

images.forEach((item, index) => {
    item.addEventListener('click', (e)=>{
        console.log(index);
        
        crousel.style.display = "block";
        
        // images[index].style.border = "1px solid red";

        crouselImg.src = e.target.src;
        let currentIndex = index;

        let prevTarget = null;
        crouselFooterImgs.forEach((item, ind) => {
            crouselFooterImgs[index].scrollIntoView({behavior:'smooth'});
            crouselFooterImgs[index].classList.add('active');
            item.addEventListener("click", (element)=>{
                crouselImg.src = element.target.src;
                currentIndex = index;
                item.scrollIntoView({behavior:'smooth'})
            })
        });

        leftbtn.addEventListener('click',()=>{
            if (currentIndex==0) {
                currentIndex = imagesdata.length-1;
                crouselImg.src = imagesdata[currentIndex].url;
            }else{
                currentIndex--;
                crouselImg.src = imagesdata[currentIndex].url;
            }
            crouselFooterImgs.forEach((item, index) => {
                if (index == currentIndex) {
                    crouselFooterImgs[index].classList.add("active");
                    crouselFooterImgs[currentIndex].scrollIntoView({behavior: 'smooth'})
                }else{
                    if (crouselFooterImgs[index].classList.contains("active")) {
                        crouselFooterImgs[index].classList.remove("active");
                    }
                }
            });
        })
        rightbtn.addEventListener('click',()=>{
            if (currentIndex==(imagesdata.length-1)) {
                currentIndex = 0;
                crouselImg.src = imagesdata[currentIndex].url;
            }else{
                currentIndex++
                crouselImg.src = imagesdata[currentIndex].url;
            }
            crouselFooterImgs.forEach((item, index) => {
                if (index == currentIndex) {
                    crouselFooterImgs[index].classList.add("active");
                    crouselFooterImgs[currentIndex].scrollIntoView({behavior: 'smooth'})
                }else{
                    if (crouselFooterImgs[index].classList.contains("active")) {
                        crouselFooterImgs[index].classList.remove("active");
                    }
                }
            });
        })
    })
});


crouselClose.addEventListener('click', ()=>{
    images.forEach(item => {
        item.classList.remove('crousel-footer-imgs');
        item.classList.add('img');
    });
    crousel.style.display = "none";
    
})
})

