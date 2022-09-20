// 画像準備用================================
class Animal {
    constructor(name, price, imgUrl) {
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}

let zoo = [
    new Animal ('Tiger', 100, 'https://cdn.pixabay.com/photo/2015/12/18/13/46/tiger-1098607__340.jpg'),
    new Animal ('Elephant', 200, 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg'),
    new Animal ('Parrot', 30, 'https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678__340.jpg'),
    new Animal ('Lemurs', 15, 'https://cdn.pixabay.com/photo/2015/10/28/15/05/lemurs-1010643__340.jpg'),
    new Animal ('Ibis', 75, 'https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__340.jpg'),
    new Animal ('Panda', 90, 'https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg'),
    new Animal ('Zebra', 120, 'https://cdn.pixabay.com/photo/2020/10/13/10/20/zebra-5651454__480.jpg'),
    new Animal ('Rabbit', 25, 'https://cdn.pixabay.com/photo/2018/06/28/00/11/mara-mammal-3502921__340.jpg'),
    new Animal ('Giraffe', 150, 'https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005__340.jpg'),
    new Animal ('Raccoon', 45, 'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081__340.jpg'),
    new Animal ('Frog', 5, 'https://cdn.pixabay.com/photo/2016/04/17/16/37/frog-1335022__340.jpg'),
    new Animal ('Iguana', 40, 'https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719__340.jpg'),
    new Animal ('Adler', 55, 'https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'),
    new Animal ('Wolf', 60, 'https://cdn.pixabay.com/photo/2019/09/17/14/24/wolf-4483675__340.jpg'),
    new Animal ('Crocodile', 250, 'https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013__340.jpg'),
    new Animal ('Ape', 20, 'https://cdn.pixabay.com/photo/2019/07/24/14/17/monkey-4360298__340.jpg'),
    new Animal ('Ostrich', 140, 'https://cdn.pixabay.com/photo/2019/09/25/15/58/ostrich-4504017__340.jpg'),
    new Animal ('Rhinoceros', 170, 'https://cdn.pixabay.com/photo/2019/09/04/09/48/rhinoceros-4451152__340.jpg'),
    new Animal ('Icebear', 210, 'https://cdn.pixabay.com/photo/2017/08/14/20/33/polar-bear-2641842__340.jpg'),
    new Animal ('Cheetah', 190, 'https://cdn.pixabay.com/photo/2018/06/14/22/22/cheetah-3475778__340.jpg'),
    new Animal ('Koala', 30, 'https://cdn.pixabay.com/photo/2013/01/14/12/21/koala-74908__340.jpg'),
    new Animal ('Penguin', 25, 'https://cdn.pixabay.com/photo/2016/09/29/16/40/king-penguin-1703294__340.jpg'),
];
//==========================================

const root = document.getElementById("root");

root.innerHTML = `
    <div class="vh-100 d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-11 col-lg-8 bg-pink d-flex flex-wrap">

                <div id="slider" class="col-12 col-md-7 p-2 d-flex justify-content-center align-items-center">
                </div>

                <div id="manipulation-container" class="col-12 col-md-5 py-2">
                    <div id="info_container">
                    </div>
                    <div id="btn_container">
                    </div>
                </div>

            </div>
        </div>
    </div>
`;

// ドキュメントあらかじめ取得処理======================
const slider = document.getElementById("slider");
const info_container = document.getElementById("info_container");

// ボタン設置========================================
let btn_container = document.getElementById("btn_container");
let btn_outer = document.createElement("div");
btn_outer.classList.add("col-12", "px-0", "d-flex", "flex-wrap", "py-2");

for(let i = 0; i < zoo.length; i++){
    let btn = document.createElement("div");
    btn.classList.add("col-3", "text-center", "py-2", "px-2");
    btn.innerHTML = `
        <button class="btn btn-light col-12">${i+1}</button>
    `

    // button押下時のイベント追加
    btn.addEventListener("click", () => {
        // イメージの追加
        let image = document.createElement("div");
        image.innerHTML = `
            <div class="full-width">
                <div class="d-flex justify-content-center">
                    <img class="col-10 img-fluid" src="${zoo[i].imgUrl}" alt="">
                </div>
            </div>
        `;
        // 該当コンテナにイメージを追加
        slider.innerHTML = "";
        slider.appendChild(image);

        // インフォメーションアップデート
        infomation_update(i);

    }) ;
    
    btn_outer.appendChild(btn);
}
btn_container.appendChild(btn_outer);


//==================================================
function infomation_update(index){
        let infomation = document.createElement("div");
        infomation.classList.add("col-12", "col-md-5");
        infomation.innerHTML = `
            <p class="m-0">Name : ${zoo[index].name}</p>
            <p class="m-0">Price : ${zoo[index].price}</p>
        `;
        info_container.innerHTML = "";
        info_container.appendChild(infomation);
}
