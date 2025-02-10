/* variables */
const body = document.querySelector('body');
const products = document.querySelector('.product-container');
const productList = document.querySelector('.card-items');
const quantity = document.querySelector('.counter-num');
const total = document.querySelector('.card-total-p');
let card_full = document.querySelector('.card-full');
let card_empty = document.querySelector('.card-empty');
const mainPage = document.querySelector('.main-page');

let hideCardBtn = document.querySelector('.hide-btn');
let cardDetails = document.querySelector('.card-full');
let cardHeader = document.querySelector('.card-header');
/* variables */

/* prodcuts data list */
let ArrProducts = [
    {
        id: 1,
        name: 'Мясная бомба',
        image: 'prod1.png',
        price: '689',
        weight: '520',
        category: 'burgers',
        description : 'Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.',
        ingridients: [
            'Пшеничная булочка', 'Котлета из говядины', 'Красный лук', 'Листья салата', 'Соус горчичный'
        ],
    },
    {
        id: 2,
        name: 'Супер сырный',
        image: 'prod2.png',
        price: '550',
        weight: '512',
        category: 'burgers',
        description: 'Сочный говяжий бифштекс, двойная порция расплавленного сыра, свежий салат, томаты и фирменный соус в мягкой булочке.',
        ingridients: [
            'Пшеничная булочка', 'Котлета из говядины', 'Сыр', 'Огурец', 'Соус горчичный'
        ],
    },
    {
        id: 3,
        name: 'Сытный',
        image: 'prod3.png',
        price: '639',
        weight: '580',
        category: 'burgers',
        description: 'Аппетитный бургер с сочным бифштексом, свежими овощами, ароматным беконом, расплавленным сыром и насыщенным соусом в мягкой булочке.',
        ingridients: [
            'Пшеничная булочка', 'Котлета из говядины', 'Ветчина', 'Огурец', 'Перец'
        ],
    },
    {
        id: 4,
        name: 'Тяжелый удар',
        image: 'prod4.png',
        price: '480',
        weight: '470',
        category: 'burgers',
        description: 'Мощный бургер с двойным бифштексом, хрустящим беконом, сыром, свежими овощами и фирменным соусом. Максимальный вкус в каждом укусе!',
        ingridients: [
            'Пшеничная булочка', 'Котлета из говядины', 'Бифштекс', 'Капуста', 'Помидоры'
        ],
    },
    {
        id: 5,
        name: 'Вечная классика',
        image: 'prod5.png',
        price: '450',
        weight: '450',
        category: 'burgers',
        description: 'Классический бургер с сочным бифштексом, свежими овощами, сыром и фирменным соусом в мягкой булочке. Вкус, проверенный временем!',
        ingridients: [
            'Пшеничная булочка', 'Котлета из говядины', 'Лук', 'Капуста'
        ],
    },
    {
        id: 6,
        name: 'Итальянский',
        image: 'prod6.png',
        price: '560',
        weight: '510',
        category: 'burgers',
        description: 'Ароматный бургер с сочным бифштексом, моцареллой, вялеными томатами, песто и свежими овощами. Итальянские вкусы в каждом кусочке!',
        ingridients: [
            'Моцарелла', 'Песто', 'бифштекс'
        ]
    },
    {
        id: 7,
        name: 'Начос',
        image: 'prod9.png',
        price: '250',
        weight: '220',
        category: 'dinner',
        description: 'Хрустящие кукурузные чипсы с расплавленным сыром, пикантным соусом и свежими добавками. Идеальная закуска для ярких вкусовых впечатлений!',
        ingridients: [
            'кукурузные чипсы', 'соус', 'лук'
        ]
    },
    {
        id: 8,
        name: 'Картошка фри',
        image: 'prod7.png',
        price: '245',
        weight: '180',
        category: 'dinner',
        description: 'Золотистая, хрустящая снаружи и нежная внутри картошка фри. Идеальный гарнир или самостоятельный перекус с любимым соусом!',
        ingridients: [
            'Карточка фри', 'Кетчуп'
        ]
    },
    {
        id: 9,
        name: 'Луковые кольца',
        image: 'prod10.png',
        price: '230',
        weight: '160',
        category: 'dinner',
        description: 'Хрустящие луковые кольца в золотистой панировке. Идеальная закуска с насыщенным вкусом, особенно в паре с соусом!',
        ingridients: [
            'луковые кольца', 'сырный соус'
        ]
    },
    {
        id: 10,
        name: 'Домашний хот-дог',
        image: 'prod11.png',
        price: '290',
        weight: '250',
        category: 'hot-dogs',
        description: 'Сочный сосиска на гриле, свежие овощи, пикантный соус и мягкая булочка. Классический вкус в домашнем исполнении!',
        ingridients: [
            'сосиска на гриле', 'мягкая булочка', 'свежие овощи'
        ]
    },
    {
        id: 11,
        name: 'Жгучий хот-дог',
        image: 'prod8.png',
        price: '239',
        weight: '245',
        category: 'hot-dogs',
        description: 'Острая сосиска на гриле, хрустящие овощи, пикантный соус и мягкая булочка. Максимум жара в каждом укусе!',
        ingridients: [
            'Острая сосиска', 'хрустящие овощи', 'соус', 'булочка'
        ]
    },
    {
        id: 12,
        name: 'Классический хот-дог',
        image: 'prod12.png',
        price: '220',
        weight: '215',
        category: 'hot-dogs',
        description: 'Сочная сосиска на гриле, свежие овощи, горчица, кетчуп и мягкая булочка. Вкусная классика, которая всегда в тренде!',
        ingridients: [
            'сосиска', 'свежие овощи', 'горчица', 'кетчуп', 'булочка'
        ]
    },
];

let checkOutList = [];
/* prodcuts data list */

/* onInit function for initializing products */
function onInit(){
    ArrProducts.forEach((item, key) => {
        let div = document.createElement('div');
        div.classList.add('product-box');
        div.dataset.category = `${item.category}`
        div.classList.add('hide');
        div.innerHTML = `
            <div class='product-image' onclick="modal(${key})">
                <img src="images/${item.image}" />
            </div>
            <h3 class="product-box-price">${item.price}₽</h3>
            <h4 class="product-box-name">${item.name}</h4>
            <h4 class="product-box-weight">${item.weight}г</h4>
            <a class="product-add-btn" onclick="addToCart(${key})">Добавить</a>
        `;
        products.appendChild(div);
    }); 
}
onInit();
/* onInit function for initializing products */

/* modal function for calling modal for individual product */
function modal(key){
    let category = ArrProducts[key].category;
    let name = ArrProducts[key].name;
    let price = ArrProducts[key].price;
    let image = ArrProducts[key].image;
    let weight = ArrProducts[key].weight;
    let description = ArrProducts[key].description != undefined ? ArrProducts[key].description : 'Описания нет';
    let modal = document.querySelector('.modal');
    modal.innerHTML = `
        <div class="modal-overlay">
        </div>
        <div class="modal-container">
            <h2>${name}</h2>   
            <a class="close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></a>
            <div class="modal-content">
                <div class="modal-content-img">
                    <img src="images/${image}" alt="">
                </div>
                <div class="modal-content-desc">
                    <h4>${description}</h4>
                    <p>Состав:</p>
                    <ul class="ingridients">

                    </ul>

                </div>
                <a class="product-add-btn" onclick="addToCart(${key})">Добавить</a>
                <h3 class='modal-price'>${price}₽</h3>
            </div>
        </div> 
    `;
    let ingridientsDiv = document.querySelector('.ingridients');
    if(ArrProducts[key].ingridients != undefined){
        for(let i=0; i < ArrProducts[key].ingridients.length; i++){
            ingridientsDiv.innerHTML += `<li>${ArrProducts[key].ingridients[i]}</li>`;
        }
    }else{
        ingridientsDiv.innerHTML += `<li>Ингридиенты не указаны</li>`;
    }
    modal.classList.add('active');
}
/* modal function for calling modal for individual product */

/* modal close function for closing modal for individual product */
function closeModal(){
    let modal = document.querySelector('.modal');
    modal.classList.remove('active');
}


/* modal close function for closing modal for individual product */

/* add to cart function for adding product to the cart */
function addToCart(id){
    if(checkOutList[id] == null){
        checkOutList[id] = ArrProducts[id];
        checkOutList[id].quantity = 1;
    }else{
        checkOutList[id].quantity += 1;
    }
    reloadCart();
}
/* add to cart function for adding product to the cart */

/* reloading cart function for creating cart item  */
function reloadCart(){
    productList.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    if(count == 0){
        card_empty.classList.add('hidden');
        card_full.classList.remove('hidden');
    }else{
        card_empty.classList.remove('hidden');
        card_full.classList.add('hidden');
    }

    checkOutList.forEach((item, key) => {
        totalPrice += parseInt(item.price * item.quantity);
        count += item.quantity;
        let div = document.createElement('div');
        div.classList.add('card-item');
        div.innerHTML = `
            <div class="card-item-left">
                <div class="card-item-img">
                    <img src="images/${item.image}">
                </div>
                <div class="card-item-text">
                    <p class="card-item-name">${item.name}</p>
                    <p class="card-item-weight">${item.weight}г</p>
                    <p class="card-item-price">${item.price}₽</p>
                </div>
            </div>
            <div class="card-item-right">
                <div class="number">
                    <span class="minus" onclick="changeQuantity(${key}, ${item.quantity - 1})">-</span>
                    <input type="text" value="${item.quantity}"/>
                    <span class="plus" onclick="changeQuantity(${key}, ${item.quantity + 1})">+</span>
                </div>
            </div>`;
        productList.appendChild(div);
        cardDetails.classList.remove('hide');
    });
    total.innerHTML = totalPrice + '₽';
    quantity.innerHTML = count;
}
/* reloading cart function for creating cart item  */

/* change quantity function for increasing or descreasing value  */
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete checkOutList[key];
    }else{
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}
/* change quantity function for increasing or descreasing value  */

/* CATEGORIES FUNCTIONS */
function filterProduct(value){
    let buttons = document.querySelectorAll('.category-block');
    let heading = document.querySelector('.products-heading');
    buttons.forEach((button) => {
        let btnText = button.innerText;
        if(value.toLowerCase() == button.dataset.set){
            button.classList.add('active');
            heading.innerText = btnText;
        }else{
            button.classList.remove('active');
        };
    });
    let elements = document.querySelectorAll('.product-box');
    elements.forEach(element => {
        if(value == 'all'){
            element.classList.remove('hide');
        }else{
            if(element.dataset.category == value){
              element.classList.remove('hide');  
            }else{
                element.classList.add('hide');
            }  
        }
    });
}
/* CATEGORIES FUNCTIONS */


/* ACTIVATE ALL FILTER */

window.onload = () => {
    filterProduct('all');
}

/* ACTIVATE ALL FILTER */

/* HIDECARD on mobile devices */

hideCardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cardDetails.classList.add('hide');
});
cardHeader.addEventListener('click', (e) => {
    e.preventDefault();
    cardDetails.classList.remove('hide');
})

/* HIDECARD on mobile devices */

/* check delivery button */
let del = document.getElementById('del');
let address_form_group = document.querySelector('.address-form-group');

function check(){
    if(del.checked){
        address_form_group.classList.add('active');
    }else{
        address_form_group.classList.remove('active');
    }
}

/* close delivey modal */
function closeDeliveryModal(){
    let modal = document.querySelector('.modal_delivery');
    modal.classList.remove('active');
}

/* modal delivery show */
function modalDelivery(){
    let modal = document.querySelector('.modal_delivery');
    modal.classList.add('active');
}