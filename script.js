//selecting all required elements
const filterItem = document.querySelector('.items')
const filterImg = document.querySelectorAll('.image')


window.onload = () =>{
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains('item')){
            //remove the first active class which is in the first element
filterItem.querySelector('.active').classList.remove('active')
//add that active class on the user selected active elemetent or item
   selectedItem.target.classList.add('active')
   let filterName = selectedItem.target.getAttribute('data-name');//getting data-name value of the user selected item and storing in a filterName variable
   filterImg.forEach((image)=>{
       let filterImages =  image.getAttribute('data-name');//getting image data-name value
       if((filterImages == filterName) || filterName ==  'all'){
           image.classList.add('show')
           image.classList.remove('hide')
       }else{
           image.classList.remove('show')
           image.classList.add('hide')
       }
   })

}
     
    }
     for (let index = 0; index < filterImg.length; index++) {
     filterImg[index].setAttribute('onclick', 'preview(this)')//adding onclick attribue in all avilable images          
      }
}

//selecting all required elements

const previewBox = document.querySelector('.preview-box')
const previewImg = previewBox.querySelector('img')
closeIcon = previewBox.querySelector('.icon')
categoryName = previewBox.querySelector('.title p')
shadow = document.querySelector('.shadow')

//fullscreeen image preview option
function preview(element){
    document.querySelector('body').style.overflow = 'hidden';//once the user click on any of the image then remove the scrollbar of the body, so user can't scroll up or down    
    let selectedPrevImg = element.querySelector('img').src; //getting user clicked image source link and storing it in a variable
    let selectedImgCategory = element.getAttribute('data-name'); // getting user clicked data-name value
    categoryName.textContent = selectedImgCategory;// passing the data-name value to category name variable
    previewImg.src = selectedPrevImg; // passing the user clicked image source in the preview image source
    previewBox.classList.add('show') ;// show the preview box
    shadow.classList.add('show') // show the show the light gey background
    closeIcon.onclick = ()=>{ // if user click on the preview box
    previewBox.classList.remove('show')
   shadow.classList.remove('show') // hide the light gey background
//    previewImg.src = '';
   document.querySelector('body').style.overflow = 'scroll';
    }
}