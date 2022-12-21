var sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));
var slidesCount = sliderImgs.length;
var  currentSlide = 1;
var slideNumberElement = document.getElementById("slide-numbe");
var nextButn = document.getElementById("next");
var prevButn = document.getElementById("prev");
var paginationElement =  document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul");
for(var i =1 ;i<=slidesCount ;i++){
    var  paginationItem= document.createElement("li");
    paginationItem.setAttribute("data-index",i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);  
}
document.getElementById("indicators").appendChild(paginationElement);
var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationBullers = Array.from(document.querySelectorAll("#pagination-ul li"))
for(var i  = 0;i<paginationBullers.length;i++){
    paginationBullers[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theCheker();
    }
}
theCheker();
nextButn.onclick = nextSlide;
prevButn.onclick = prevtSlide;

function nextSlide(){
    if(nextButn.classList.contains("disabled")){
return false;
    } else{
        currentSlide++;
    theCheker();
    }
    
}
function prevtSlide(){
    if(prevButn.classList.contains("disabled")){
        return false;
    }else{
        currentSlide--;
        theCheker();
    }
}

function theCheker() {
    removAllActive();
    sliderImgs[currentSlide -1].classList.add("active");
    paginationCreatedUl.children[currentSlide -1].classList.add("active");
    //  slideNumberElement.textContent = "Slide #" + (currentSlide) + "of" + (slidesCount);
  
    if(currentSlide == 1){
        prevButn.classList.add("disabled");
    } else {
        prevButn.classList.remove("disabled");
    }
    if(currentSlide == slidesCount){
        nextButn.classList.add("disabled");
    } else{
        nextButn.classList.remove("disabled");
    }

}

function removAllActive(){
sliderImgs.forEach(function(img){
    img.classList.remove("active");
});
paginationBullers.forEach(function(bullet){
    bullet.classList.remove("active");
});
}
