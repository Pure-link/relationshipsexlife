btn = document.getElementById("btn4")
btn2 = document.getElementById("btn5")

page = ["image/book00.jpg","image/book1.png", "image/book2.png", "image/book3.png", "image/book4.png", "image/book5.png"]
count = 1
btn.addEventListener("click", function(){
    imgSlider = document.getElementById("imgSlider")
    imgSlider.src = page[count]
    count += 1
    if (count == 6){
        count = 0
    }
})

btn2.addEventListener("click", function(){
    imgSlider = document.getElementById("imgSlider")
    imgSlider.src = page[count]
    count -= 1
    if (count < 0){
        count = 0
    }
})