// ex 1 

let input = document.querySelector(".inpt");
let btn = document.querySelector(".btn");

document.addEventListener("click", ()=> {
    btn.textContent = input.value; 
});

// ex 2

let image = document.querySelector(".image")
  image.setAttribute("src", "https://img3.akspic.ru/previews/1/6/5/3/7/173561/173561-dodge-legkovyye_avtomobili-dodge_challenger_2021_goda-sportkar-dodzh_chardzher_srt_megeru-550x310.jpg");

// ex 3

let link = document.querySelector(".link")
let img = document.querySelector(".img");
link.setAttribute('href', 'https://img2.akspic.ru/crops/6/2/4/8/6/168426/168426-dodzh_chellendzher-dodzh_demon-dodge-krajsler_neon-legkovyye_avtomobili-3840x2160.jpg')
img.setAttribute("alt", "photo about yellow car");

// ex 4

let li = document.querySelector('.lishka')
li.textContent = 'This is new text'
