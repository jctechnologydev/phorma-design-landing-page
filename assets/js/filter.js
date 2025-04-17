const filterTab = document.querySelectorAll("#filter-category button");
const filterSubcategory = document.querySelectorAll("#filter-subcategory .tablinks");
const filterableItems = document.querySelectorAll("#filter-items .element");
const filterMain = document.querySelectorAll("#main-filter button");
let sliderFilterGeneral = document.querySelector('.portifolio-slider');

const images = [
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg',
    'https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg',
    'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg',
    'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg',
    'https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg'
];

console.log(images);

let isAnimating = false;
let wheelTimeout;
let currentInd = 3; 
let wheelHandler = null;


let firstSeleted = "3D Environment";
let secondSeleted = "Kitchen";

let currentFirstSeleted = "";
let currentSecondSeleted = "";

let currentIndex = 0;
let reverse = false;

let selectedData = {};

const messageData = {
    "3D Environment":
    {
        messageExternal: "The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",
        messageInternal: "Creating virtual lifestyles to insert a previously modeled product, in order to show it and allow the final consumer to visualize it in a home lifestyle. The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",
    }
    ,
    "3D Product Modeling":
    {
        messageExternal: "Your product is completely modeled (drawn) through a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",
        messageInternal: "Based on the product’s project or a photgraph and all its dimensions, the product is completely modeled (drawn) using a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",
    }
    ,
    "Photo Fusion":
    {
        messageExternal: "Apply your product’s photograph in a perfect virtual lifestyle, making it part of the scene.",
        messageInternal: "Apply your product’s photograph in a perfect virtual lifestyle, making it part of the scene.",
    }
    ,
    "3D Animations":
    {
        messageExternal: "We develop 3D animations, in order to optimize demonstration and understanding of all details, differentials, colors and functions of a particular product.",
        messageInternal: "We develop 3D animations and videos in order to optimize demonstration and understanding of all details, differentials, colors and functions of a particular product. Furthermore, we also produce instructional videos with step-by-step instructions for the assembly process, in order to help the final customer.",
    }
    ,
    "Videos":
    {
        messageExternal: "We create institutional, promotional and product-assembly videos. We give movement to your product, showing all its functionalities and differentials.",
        messageInternal: "We create institutional, promotional and product-assembly videos. We give movement to your product, showing all its functionalities and differentials.",
    }
    ,
    "Graphic Design":
    {
        messageExternal: "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers.",
        messageInternal: "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers. The art is produced with harmony, using modern and different layouts that stand out among other competitors.",
    }

};



const filtersDataAll = {
    "3D Environment": [
        {
            name: "Kitchen", count: 7, content: [
                "../assets/Imagens/Imagens3D/Cozinha Esmeralda - Composição 01_Lâmina Mel - Cinza Supremo_Amb_ok copy.jpg",
                "./assets/Imagens/Imagens3D/Cozinha Ibiza_Lamina Mel - Ripado - Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Comp 03_Montana-Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Completa_Comp 01_Montana-Grafite_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha KIT LIVIA 2MT 8P 2G_Amb_ok.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Prisma_Amb_ok.jpg"]
        },
        {
            name: "Bath", count: 12, content: [
            ]
        },
        {
            name: "Bedroom", count: 5, content: [
                "../assets/Imagens/Imagens3D/Armário Duna + Painel Ripado + Espelheira Lua_Amb_ok.jpg",
                "../assets/Imagens/Imagens3D/Balcão Marina 2P_Montana-Grafite_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/JP25 - Ambiente - ok ok.jpg",
                "../assets/Imagens/Imagens3D/Linha Elements - Armario Vittta & Espelheira Ori_Amb_ok.jpg"]
        },
        {
            name: "Living Room", count: 6, content: [
                "../assets/Imagens/Imagens3D/Sofá Itália - Canto_E.4.00.11 - E.4.00.10_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Sofá Gálatas_791014_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Sofá Singapura_E.4.00.05_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Sofá Quebec - 2 mód_D.1.00.07_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Sofá Quebec_3 mód_F.7.00.07_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Sofá Singapura_E.4.00.05_Amb_ok copy.jpg"]
        },
        {
            name: "Dining Room", count: 7, content: [
                "../assets/Imagens/Imagens3D/Ambiente 4 - Mesa Heloisa - Cad Aguinez.jpg",
                "./assets/Imagens/Imagens3D/Ambiente 6 - Mesa Jade - Cad Malu - Banq Lavínia_3.jpg",
                "../assets/Imagens/Imagens3D/Ambiente 7 - Mesa Rafaela - Cad Lavínia - Cad, Banq Rafaela_2.jpg",
                "../assets/Imagens/Imagens3D/Ambiente 10 - Mesa Stilo - Cad Yasmim_amb.jpg",
                "../assets/Imagens/Imagens3D/Ambiente 12 - Bistro Rafaela - Banq Marina.jpg",
                "../assets/Imagens/Imagens3D/Ambiente Novo  .jpg",
                "../assets/Imagens/Imagens3D/Conjunto Valencia 1,70 + 6 Cad Kieve_Cobre - H.9.00.00_Amb_ok copy.jpg"]
        },
        {
            name: "Mattress", count: 6, content: [
                "../assets/Imagens/Imagens3D/Eminence_1,58 - 3.jpg",
                "./assets/Imagens/Imagens3D/Gran Master_1,58_Ambiente.jpg",
                "../assets/Imagens/Imagens3D/Granite Expressive_Amb_ok.jpg",
                "../assets/Imagens/Imagens3D/Light Stress Euro One Face_Amb_ok3.jpg",
                "../assets/Imagens/Imagens3D/Planet Firm_1,58 - 2.jpg",
                "../assets/Imagens/Imagens3D/Velvet_1,58_Base nova.jpg"]
        },
        {
            name: "Home Appliances & Electronics", count: 3, content: [
                "../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg",
                "./assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg",
                "./assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"]
        }
    ],
    "3D Product Modeling": [
        { name: "Kitchen", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Bath", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Bedroom", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Dining Room", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Mattress", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Home Appliances & Electronics", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },
        { name: "Bedroom", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Ambiente 03_ Ok.jpg"] },

    ],
    "Photo Fusion": [
        { name: "Kitchen", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Banqueta Home_Amb_ok"] },
        { name: "Bath", count: 0, content: [""] },
        { name: "Bedroom", count: 0, content: [""] },
        {
            name: "Living Room", count: 6, content: [
                "../assets/Imagens/Imagens Fotofusão/Ambiente_Sofá Lutz  .jpg",
                "../assets/Imagens/Imagens Fotofusão/Jogo de Cadeira Barbante_2.jpg",
                "../assets/Imagens/Imagens Fotofusão/Poltrona Home 2106 Pés pretos.jpg",
                 "../assets/Imagens/Imagens Fotofusão/Sofá 01.jpg",
                "../assets/Imagens/Imagens Fotofusão/Sofá 02.jpg",
                "../assets/Imagens/Imagens Fotofusão/Grumari 90+90 2372.jpg"]
        },
        { name: "Dining Room", count: 0, content: [""] },
        { name: "Home Appliances & Electronics", count: 0, content: [""] },
        {
            name: "Mattress", count: 7, content: [
                "../assets/Imagens/Imagens Fotofusão/Colchão Alaska.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Los Angeles.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Nano Fiber.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Los Angeles.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Nano Fiber.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Perfect Sleep.jpg",
                "../assets/Imagens/Imagens Fotofusão/Colchão Texas.jpg"]
        },
    ],
    "3D Animations": [
        { name: "3D Animations", count: 6, content: ["n1CxOlidEaU", "RU1vQA5HTAQ", "h2pPyhutP6w", "2uxaGPSy6e0", "5Q2RufAKtSo", "uLQ5G8_nAb8"] },
        { name: "Products Assembly Animations", count: 6, content: ["IjwlW_hbMOs", "IhE4gQoi1_k", "YG9pMUFSWGI", "3E6HfOqGHEg", "TMm-gSnEASE", "HG9sdARThb8"] }
    ],
    "Videos": [
        { name: "Home and Rack", count: 1, content: ["mkLuv2DpCV0"] },
        { name: "Living Room", count: 1, content: ["_avjE_AQbN0"] },
        { name: "Dining Room", count: 1, content: ["7X8p4VyUUSM"] },
        { name: "Kitchen", count: 1, content: ["SHoLLLgNonA"] },
        { name: "Others", count: 3, content: ["JXUVVpe9l-E", "gq2kBAcVo9I", "mQN7zFab390"] }
    ]
};

selectedData = filtersDataAll;

const groupedByCategory = {};

for (const category in filtersDataAll) {
    filtersDataAll[category].forEach(item => {
        const name = item.name;

        if (!groupedByCategory[name]) {
            groupedByCategory[name] = [];
        }

        groupedByCategory[name].push({
            name: category,
            count: item.count,
            content: item.content
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {

   


















    

    const filterTabContainer = document.getElementById('filter-category');
    const subcategoryContainer = document.getElementById('filter-subcategory');
    const filterButtonContainer = document.getElementById('main-filter');
    const filterSubcategories = document.getElementById('filter-items');
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");

    zoomInBtn.style.display = "block";
    zoomOutBtn.style.display = "none";

    const allButton = createButton("All", "filter-btn filter-btn-all", "all", "all");
    const byCategoryButton = createButton("By Category", "filter-btn-category", "category", "category");
    filterButtonContainer.appendChild(allButton);
    filterButtonContainer.appendChild(byCategoryButton);

    let i = 0;
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks category active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category,
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;

        /*selectedData[category].forEach((subcategory, index) => {
            const buttonActive = i === 0 ? "tablinks  active" : "tablinks";
            const subcategoryButton = createSubcategoryButtonWithCount(subcategory.name, buttonActive, category + subcategory.name, subcategory.count);
            subcategoryContainer.appendChild(subcategoryButton);
            const imgContens = createImgGallery("w-33 element", category + subcategory.name, "assets/img/img1.webp");
            filterSubcategories.appendChild(imgContens);
        });*/
    }

    // 2 Query the filter tab buttons after append to DOM
    const filterTab = document.querySelectorAll("#filter-category button");
    const filter = document.querySelectorAll("#main-filter button");

    if (filterTab.length > 0) {
        filterTab.forEach(tab => tab.addEventListener("click", filterCategories));
        filterTab[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }

    if (filter.length > 0) {
        filter.forEach(tab => tab.addEventListener("click", mainFilter));
        filter[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }
    
    //renderGallery(selectedData, firstSeleted, secondSeleted);









});

function createButton(text, className, dataFilter, id) {
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-filter", dataFilter);
    button.setAttribute("id", id)
    button.innerHTML = `${text}`;
    return button;
}




function createButtonWithCount(text, className, dataFilter, count) {
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-filter", dataFilter);
    button.innerHTML = `${text} <span class="count-badge" style="pointer-events: none;">${count}</span>`;
    return button;
}



function createSubcategoryButtonWithCount(text, className, dataFilter, count) {
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-name", dataFilter);
    button.innerHTML = `${text} <span class="count-badge" style="pointer-events: none;">${count}</span>`;
    return button;
}

function createImgGallery(className, dataFilter, url) {
    const div = document.createElement("div");
    div.className = className;
    div.setAttribute("data-filter", dataFilter);
    div.innerHTML = `<img src="${url}" alt="" height="350px"></img>`;
    return div;
}


function filterCategories(event) {
    const activeTab = document.querySelector("#filter-category .active");


    if (activeTab) {
        activeTab.classList.remove("active");
    }
    event.target.classList.add("active");


    const filterSubcategory = document.querySelectorAll("#filter-subcategory .tablinks");
    filterSubcategory.forEach(subcategory => {
        if (subcategory.dataset.name.includes(event.target.dataset.filter)) {
            subcategory.classList.remove("hidden");
            firstSeleted = subcategory.dataset.name;
        } else {
            subcategory.classList.add("hidden");
        }
    });

    const selectedCategory = event.target.dataset.filter;
    firstSeleted = selectedCategory;



}


function filterSubcategories(event) {
    const activeTab = document.querySelector("#filter-subcategory .active");


    if (activeTab) {
        activeTab.classList.remove("active");
    }
    event.target.classList.add("active");
    secondSeleted = event.target.dataset.name;

    // Render the filtered gallery items
    renderGallery(selectedData, firstSeleted, secondSeleted);
}



function mainFilter(event) {

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    activeFilter = event.target.dataset.filter;
    selectedData = activeFilter === "category" ? groupedByCategory : filtersDataAll;

    if(activeFilter === "category"){
        reverse = false;
    }
    else{
        reverse = true;
    }

    renderFilters(selectedData);
}

// Function to update my filters options
function renderFilters(data) {
    const filterTabContainer = document.getElementById('filter-category');
    const subcategoryContainer = document.getElementById('filter-subcategory');
    let i = 0;
    filterTabContainer.innerHTML = "";
    subcategoryContainer.innerHTML = "";
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category,
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;


        selectedData[category].forEach((subcategory, index) => {
            const buttonActive = index === 0 && i === 0 ? "tablinks active" : "tablinks";   
            const subcategoryButton = createSubcategoryButtonWithCount(subcategory.name,
                buttonActive, category + subcategory.name, subcategory.count);

            subcategoryContainer.appendChild(subcategoryButton);
        });
    }

    const filterTab = document.querySelectorAll("#filter-category button");
    const filter = document.querySelectorAll("#main-filter button");
    const filterSubcategory = document.querySelectorAll("#filter-subcategory button");

    if (filterTab.length > 0) {
        filterTab.forEach(tab => tab.addEventListener("click", filterCategories));
        filterTab[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }

    if (filterSubcategory.length > 0) {
        filterSubcategory.forEach(tab => tab.addEventListener("click", filterSubcategories));
        filterSubcategory[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }

    if (filter.length > 0) {
        filter.forEach(tab => tab.addEventListener("click", mainFilter));
    } else {
        console.error("No filter tab buttons found.");

    }
}


function renderGallery(filteredVideos, firstSeleted, secondSeleted) {
 
    const galleryContainer = document.getElementById("filter-items");
    const sliderFilter = document.querySelector('.portifolio-slider');

    //sliderFilter = document.querySelector('.portifolio-slider');
    sliderFilterGeneral = document.querySelector('.portifolio-slider');

    const cardContainer = document.getElementById("filter-content-card");
    const imageViewer = document.getElementById("img-portifolio");

    galleryContainer.innerHTML = "";
    sliderFilter.innerHTML = "";
    //cardContainer.innerHTML = "";
    let auxSecondSeleted = secondSeleted.replace(firstSeleted, "");
    imageViewer.innerHTML = "";
    if(!reverse) {
        console.log(messageData);
        console.log(secondSeleted);
        console.log(firstSeleted);
        seletedSec = secondSeleted.replace(firstSeleted, "");
        console.log(seletedSec);
        imageViewer.innerHTML = `
        <img id="view-img">
        <p id="img-description">${messageData[seletedSec].messageInternal}</p>
    `;
    }
    else
    {

        imageViewer.innerHTML = `
            <img id="view-img">
           
            <p id="img-description">${messageData[firstSeleted].messageInternal}</p>
        `;
        
    }
 

    filteredVideos[firstSeleted].forEach(item => {


        if (item.name === auxSecondSeleted) {
            console.log(item.content);
            createSliderBoxes(item.content,sliderFilter);

            /*item.content.forEach((contentData,index) => {
                if (contentData.includes("assets")) {
                    //stack-cards__item bg radius-lg shadow-md js-stack-cards__item
                    cardContainer.innerHTML = cardContainer.innerHTML + `<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
                        <div class="grid">
                            <div class="col-12 height-100%">
                                <img class="block width-100% height-100% object-cover" src="${contentData}" onclick="openImage(this);" alt="Image description",
                                data-index="${parseInt(index)}" 
                                data-first="${firstSeleted}" 
                                data-second="${auxSecondSeleted}">
                            </div>
                        </div>
                    </li>`;

                    
                } else {
                    //stack-cards__item bg radius-lg shadow-md js-stack-cards__item
                    const videoUrl = `https://www.youtube.com/embed/${contentData}?rel=0&controls=0&showinfo=0&modestbranding=0`;
                    cardContainer.innerHTML = cardContainer.innerHTML + `<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
                    <div class="grid">
                        <div class="col-12 height-100%">
                            <iframe src="${videoUrl}" height="100%" width="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    </li>`;
                }

            });*/
        
        
        }

    });

}


function toggleSocialsOnScroll(contactSelector, socialsSelector) {
  $(document).ready(function() {
    var $contact = $(contactSelector);
    var $socials = $(socialsSelector);

    if ($contact.length === 0) {
      console.error(`Element ${contactSelector} not found!`);
      return;
    }

    $(window).on("scroll", function() {
      var top_of_element = $contact.offset().top;
      var bottom_of_element = top_of_element + $contact.outerHeight();
      var top_of_screen = $(window).scrollTop();
      var bottom_of_screen = top_of_screen + $(window).innerHeight();

      if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
        $socials.hide();
      } else {
        $socials.show();
      }
    });
  });
}


function closeImage() {
    const container = document.querySelector(".container-portfolio-slider");
    const overlay = document.querySelector(".img-background");
    const viewImg = document.getElementById("view-img");
    viewImg.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto"; 
}

function openImage(imgs) {


    const container = document.querySelector(".container-portfolio-slider");
    const overlay = document.querySelector(".img-background");

    const viewImg = document.getElementById("view-img");

    viewImg.style.display = "block";

    currentFirstSeleted = imgs.dataset.first;
    currentSecondSeleted = imgs.dataset.second;
    currentIndex = imgs.dataset.index;

   if(parseInt(currentIndex) === 0){
        leftArrowOpacity();
   }
    src = "";
    selectedData[imgs.dataset.first].forEach(item => {

        if (item.name === imgs.dataset.second) {
            src = item.content[imgs.dataset.index];
            if(parseInt(currentIndex) === selectedData[imgs.dataset.first].length - 1){
                rightArrowOpacity();
            }
            else if(parseInt(currentIndex) > 0 &&  parseInt(currentIndex) < selectedData[imgs.dataset.first].length ){
                bothArrowsColored();
            }
        }});
    viewImg.src = src;
    overlay.style.display = "flex"; 
    document.body.style.overflow = "hidden";
}

function prevImage() {
    
    if (parseInt(currentIndex) - 1 >= 0) {  

        const viewImg = document.getElementById("view-img");
        currentIndex = parseInt(currentIndex) - 1; 
        
        selectedData[currentFirstSeleted].forEach(item => {
            if (item.name === currentSecondSeleted) {
                console.log(currentIndex);
                viewImg.src = item.content[currentIndex];
            }
        });
        
    } else {
        leftArrowOpacity();
    }
}


function nextImage(){
    console.log(currentIndex);
    const viewImg = document.getElementById("view-img");
    currentIndex = parseInt(currentIndex) + 1;
    selectedData[currentFirstSeleted].forEach(item => {

        if (item.name === currentSecondSeleted && currentIndex < item.content.length) {
            console.log(currentIndex);
            viewImg.src = item.content[currentIndex];
        } 
        else if(currentIndex === item.content.length - 1)
        {
            rightArrowOpacity();
        }
    });
}

function leftArrowOpacity(){
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#FFFFFF";
    rightArrow.style.opacity = "1"; 

    leftArrow.style.color = "#808080";
    leftArrow.style.opacity = "0.5"; 
}


function rightArrowOpacity(){
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#808080";
    rightArrow.style.opacity = "0.5"; 

    leftArrow.style.color = "#FFFFFF";
    leftArrow.style.opacity = "1"; 
}

function bothArrowsColored(){
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#FFFFFF";
    rightArrow.style.opacity = "1"; 

    leftArrow.style.color = "#FFFFFF";
    leftArrow.style.opacity = "1"; 
}

function zoomInImage(){
    const viewImg = document.getElementById("view-img");
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");

    zoomInBtn.style.display = "none";
    zoomOutBtn.style.display = "block";
    viewImg.style.transform = "scale(1.5)";

}

function zoomOutImage(){
    const viewImg = document.getElementById("view-img");
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");

    zoomInBtn.style.display = "block";
    zoomOutBtn.style.display = "none";
    viewImg.style.transform = "scale(1)";
}



function toggleFullscreen() {
    const viewImg = document.getElementById("view-img");
    const textDescription = document.getElementById("img-description");
    const container = viewImg.parentElement;
    
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen()
                .then(() => {
                    viewImg.style.transform = "scale(1.5)";
                    textDescription.style.display = "none";
                });
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
                .then(() => {
                    viewImg.style.transform = "scale(1)";
                    textDescription.style.display = "block";
                });
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    const viewImg = document.getElementById("view-img");
    const textDescription = document.getElementById("img-description");
    if (!document.fullscreenElement) {
        viewImg.style.transform = "scale(1)";
        textDescription.style.display = "block";
    }


    
});



toggleSocialsOnScroll("#contact", ".redes-sociais-top");




function createSliderBoxes(images, sliderFilter) {
    let auxSecondSeleted = secondSeleted.replace(firstSeleted, "");
    images.forEach((imgUrl, index) => {
                if (imgUrl.includes("assets")) {
                   
                    const box = document.createElement('div');
                    box.className = `box${index + 1}`;
                    
                    const img = document.createElement('img');
                    img.src = imgUrl;
                    img.alt = `Slide ${index + 1}`;
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    img.setAttribute('onclick', 'showToast("Double click to open the image")');
                    img.setAttribute('ondblclick', 'openImage(this)');
                    img.setAttribute('data-index', index);
                    img.setAttribute('data-first', firstSeleted);   
                    img.setAttribute('data-second', auxSecondSeleted);
                    box.appendChild(img);
                    console.log(sliderFilter);
                    sliderFilter.appendChild(box);
            
                    
                    box.addEventListener('click', function() {
                        moveToIndex(index);
                    });
            
                    img.addEventListener('mouseenter', function() {
                        if (!wheelHandler) {
                            wheelHandler = handleWheel;
                            img.addEventListener('wheel', wheelHandler, { passive: false });
                        }
                    });
            
                    img.addEventListener('mouseleave', function() {
                        if (wheelHandler) {
                            img.removeEventListener('wheel', wheelHandler);
                            wheelHandler = null;
                        }
                    });
              
                    
                    positionBoxes();
                    
                } else {
                    const box = document.createElement('div');
                    box.className = `box${index + 1}`;
                    
                    const img = document.createElement('iframe');
                    img.src = imgUrl;
                    img.alt = `Slide ${index + 1}`;
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    
                    img.setAttribute('ondblclick', 'openImage(this)');

                    img.setAttribute('data-index', index);
                    img.setAttribute('data-first', firstSeleted);   
                    img.setAttribute('data-second', auxSecondSeleted);
                    box.appendChild(img);
                    console.log(sliderFilter);
                    sliderFilter.appendChild(box);
            
                    
                    box.addEventListener('click', function() {
                        moveToIndex(index);
                    });
            
                    img.addEventListener('mouseenter', function() {
                        if (!wheelHandler) {
                            wheelHandler = handleWheel;
                            img.addEventListener('wheel', wheelHandler, { passive: false });
                        }
                    });
            
                    img.addEventListener('mouseleave', function() {
                        if (wheelHandler) {
                            img.removeEventListener('wheel', wheelHandler);
                            wheelHandler = null;
                        }
                    });
                                        
                }

    });
        
};


function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '1000';
    toast.style.transition = 'opacity 0.3s';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 1000);
}

function positionBoxes() {
    const boxes = document.querySelectorAll('.portifolio-slider > div');
    boxes.forEach((box, index) => {
        box.style.position = 'absolute';
        box.style.overflow = 'hidden';
        box.style.borderRadius = '20px';
        box.style.transition = 'all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        box.style.cursor = 'pointer';

        if (index === 0 || index === 6) { 
            box.style.width = '100vh';
            box.style.height = '60vh';
            box.style.transform = 'scale(0.2) translate(-50%,-50%)';
            box.style.top = '15%';
            box.style.zIndex = '1';
        } 
        else if (index === 1 || index === 5) {
            box.style.width = '100vh';
            box.style.height = '60vh';
            box.style.transform = 'scale(0.4) translate(-50%,-50%)';
            box.style.top = '20%';
            box.style.zIndex = '2';
        }
        else if (index === 2 || index === 4) {
            box.style.width = '100vh';
            box.style.height = '60vh';
            box.style.transform = 'scale(0.6) translate(-50%,-50%)';
            box.style.top = '25%';
            box.style.zIndex = '3';
        }
        else if (index === 3) { 
            box.style.width = '60vw';
            box.style.height = '60vh';
            box.style.transform = 'scale(1) translate(-50%,-50%)';
            box.style.top = '35%';
            box.style.zIndex = '4';
        }

        const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '100%'];
        box.style.left = positions[index];
    });
}


function moveToIndex(targetIndex) {
    if (isAnimating || targetIndex === currentInd) return;
    isAnimating = true;
    
    const steps = calculateSteps(targetIndex);
    
    const stepFunction = steps > 0 ? rotateForward : rotateBackward;
    
    let stepsCompleted = 0;
    const totalSteps = Math.abs(steps);
    
    function performStep() {
        if (stepsCompleted < totalSteps) {
            stepFunction();
            stepsCompleted++;
            setTimeout(performStep, 100); 
        } else {
            isAnimating = false;
        }
    }
    
    performStep();
}


function calculateSteps(targetIndex) {
    const diff = targetIndex - currentInd;
    // circular slider
    if (diff > images.length / 2) return diff - images.length;
    if (diff < -images.length / 2) return diff + images.length;
    return diff;
}

// (next slide)
function rotateForward() {
    currentInd = (currentInd + 1) % images.length;
    
    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index - 1 + slides.length) % slides.length;
        
        if (index === 0) {
            slide.classList.add('lastSlide');
            setTimeout(() => slide.classList.remove('lastSlide'), 10);
        }
        
        updateSlidePosition(slide, newPos);
    });
    
    const firstSlide = sliderFilterGeneral.firstElementChild;
    sliderFilterGeneral.appendChild(firstSlide.cloneNode(true));
    sliderFilterGeneral.removeChild(firstSlide);
    
    updateClickEvents();
}

// (previous slide)
function rotateBackward() {
    currentInd = (currentInd - 1 + images.length) % images.length;
    
    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index + 1) % slides.length;
        
        if (index === slides.length - 1) {
            slide.classList.add('firstSlide');
            setTimeout(() => slide.classList.remove('firstSlide'), 10);
        }
        
        updateSlidePosition(slide, newPos);
    });
    
    const lastSlide = sliderFilterGeneral.lastElementChild;
    sliderFilterGeneral.insertBefore(lastSlide.cloneNode(true), sliderFilterGeneral.firstChild);
    sliderFilterGeneral.removeChild(lastSlide);
    
    updateClickEvents();
}

function updateSlidePosition(slide, positionIndex) {
    const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '100%'];
    const scales = [0.2, 0.4, 0.6, 1, 0.6, 0.4, 0.2];
    const tops = ['15%', '20%', '25%', '35%', '25%', '20%', '15%'];
    const zIndexes = [1, 2, 3, 4, 3, 2, 1];
    
    slide.style.left = positions[positionIndex];
    slide.style.transform = `scale(${scales[positionIndex]}) translate(-50%, -50%)`;
    slide.style.top = tops[positionIndex];
    slide.style.zIndex = zIndexes[positionIndex];
}

function updateClickEvents() {
    const boxes = document.querySelectorAll('.portifolio-slider > div');
    boxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            moveToIndex(index);
        });
    });
}

function handleWheel(e) {
    e.preventDefault();
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) rotateForward();
        else if (e.deltaY < 0) rotateBackward();
    }, 100);
}



document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') rotateForward();
    else if (e.key === 'ArrowLeft') rotateBackward();
});
