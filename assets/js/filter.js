const filterTab = document.querySelectorAll("#filter-category button");
const filterSubcategory = document.querySelectorAll("#filter-subcategory .tablinks");
const filterableItems = document.querySelectorAll("#filter-items .element");


let sliderFilterGeneral = document.querySelector('.portifolio-slider');

let isAnimating = false;
let wheelTimeout;

let wheelHandler = null;
let isRotating = false;


let firstSeleted = "3D Environment";
let secondSeleted = "Kitchen";

let currentFirstSeleted = "";
let currentSecondSeleted = "";

let currentIndex = 0;

let selectedData = {};

const messageData = {
    "Imagens 3D":
    {
        messageExternal: "The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",
        messageInternal: "Creating virtual lifestyles to insert a previously modeled product, in order to show it and allow the final consumer to visualize it in a home lifestyle. The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",
    }
    ,
    "Animações Digitais":
    {
        messageExternal: "Your product is completely modeled (drawn) through a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",
        messageInternal: "Based on the product’s project or a photgraph and all its dimensions, the product is completely modeled (drawn) using a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",
    },
    "Design Gráfico":
    {
        messageExternal: "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers.",
        messageInternal: "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers. The art is produced with harmony, using modern and different layouts that stand out among other competitors.",
    }

};



const filtersDataAll = {
    "Imagens 3D": [
        {
            name: "Modelagem 3D", count: 38, content: [
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Banheiro 01.jpg",
                "./assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Banheiro 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Banheiro 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 04.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 06.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 07.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 10.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Colchão 11.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Cozinha 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Cozinha 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Cozinha 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Cozinha 04.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Guarda Roupa 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Guarda Roupa 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Guarda Roupa 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Guarda Roupa 06.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Infantil 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Infantil 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Infantil 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Mesa com Cadeiras 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Mesa com Cadeiras 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Mesa com Cadeiras 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Mesa com Cadeiras 04.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Mesa com Cadeiras 05.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Poltrona 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Poltrona 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Prateleiras 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Quarto Completo.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 05.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 07.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 08.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 09.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 10.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/01 - Modelagem 3D/Sofá 11.jpg",

            ]
        },
        {
            name: "Fotofusão", count: 17, content: [
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Balanço - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Banquetas - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Cadeiras - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Colchão - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Colchão - 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Colchão - 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Colchão - 04.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Colchão - 05.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Mesa Bistrô com Cadeiras - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Mesa com Cadeiras - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Poltrona - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Poltronas e Mesinha - 01.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Sofá - 02.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Sofá - 03.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Sofá - 04.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Sofá - 05.jpg",
                "../assets/Imagens/Portifolio/1 - Imagens 3D/02 - Fotofusão/Sofá 01.jpg",
            ]
        },

    ],
    "Animações Digitais": [
        { name: "Home and Rack", count: 10, content: ["K8xgn58vX_o", "AT8VS7d-B94", "2uxaGPSy6e0", "d6S8J4b5Xf4", "SIZgYfPeNlE", "QwPRSOC5ADo", "kKWFr5HQsv4", "hNLUaZ7z2LY", "2G1dRcqwL6A", "5zJPaZ1qh7I"] }

    ],
    "Design Gráfico": [
        {
            name: "Images", count: 23, content: [
                "../assets/Imagens/Portifolio/3 - Design Gráfico/01 - Mockup Catálogo A4 - Yalith 1.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/02 - Mockup Catálogo A4 - Yalith 2.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/03 - Mockup Catálogo A4 Aberto - Yalith 3.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/04 - Mockup Catálogo A4 - Aberto - Pluma 1.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/05 - Mockup Catálogo A4 - Aberto - Pluma 2.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/06 - Mockup Catálogo A4 - Aberto - Pluma 3.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/07 - Mockup Catálogo A4 - Madine.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/08 - Mockup Catálogo A4 - Aberto - Pluma 4.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/09 - Mockup Catálogo A4 Aberto - Madine 1.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/10 - Mockup Catálogo A4 Aberto - Madine 2.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/11 - Mockup Catálogo A4 - Aberto - Caemmun.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/12 - Mockup Catálogo A4 - Aberto - Caemmun 2.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/13 - Mockup Catálogo A4 - Aberto - Caemmun 3.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/14 - Mockup Quadrado.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/15 - Mockup Catálogo A4 Aberto - Anjos 1.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/17 - Mockup Catálogo A4 - Aberto - Perfan 2.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/18 - Mockup Catálogo A4 Aberto - Perfan.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/19 - Mockup Catálogo A4 - vários.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/20 - Mockup Catálogo A4 - Aberto - Adrian.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/21 - Mockup Catálogo A4 - Aberto - Molufan.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/22 - Mockup Catálogo A4 - Aberto - Vivano.jpg",
                "../assets/Imagens/Portifolio/3 - Design Gráfico/23 - Mockup Catálogo A4 Aberto - Vivano.jpg",

            ]
        },
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
    const filterButtonContainer = document.getElementById('main-filter');
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");

    zoomInBtn.style.display = "block";
    zoomOutBtn.style.display = "none";

    const allButton = createButton("All", "filter-btn filter-btn-all", "all", "all");

    filterButtonContainer.appendChild(allButton);

    let i = 0;
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks category active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category,
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;
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

    if (selectedData[firstSeleted].length === 1) {
        renderGallery(selectedData, firstSeleted, "none");
    }

}


function filterSubcategories(event) {
    const activeTab = document.querySelector("#filter-subcategory .active");


    if (activeTab) {
        activeTab.classList.remove("active");
    }
    event.target.classList.add("active");
    secondSeleted = event.target.dataset.name;
    renderGallery(selectedData, firstSeleted, secondSeleted);
}



function mainFilter(event) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    activeFilter = event.target.dataset.filter;
    selectedData = activeFilter === "category" ? groupedByCategory : filtersDataAll;

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
            if (selectedData[category].length === 1) {

            } else {
                subcategoryContainer.appendChild(subcategoryButton);
            }

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

}


function renderGallery(filteredVideos, firstSeleted, secondSeleted) {

    const galleryContainer = document.getElementById("filter-items");
    const sliderFilter = document.querySelector('.portifolio-slider');

    sliderFilterGeneral = document.querySelector('.portifolio-slider');

    const cardContainer = document.getElementById("filter-content-card");
    const imageViewer = document.getElementById("img-portifolio");

    galleryContainer.innerHTML = "";
    sliderFilter.innerHTML = "";

    let auxSecondSeleted = secondSeleted.replace(firstSeleted, "");
    imageViewer.innerHTML = "";

    imageViewer.innerHTML = `
        <img id="view-img">
        <p id="img-description">${messageData[firstSeleted].messageInternal}</p>
    `;


    filteredVideos[firstSeleted].forEach(item => {

        if (item.name === auxSecondSeleted) {
            createSliderBoxes(item.content, sliderFilter);

        } else if (auxSecondSeleted === "none") {
            createSliderBoxes(item.content, sliderFilter);
        }

    });




}


function toggleSocialsOnScroll(contactSelector, socialsSelector) {
    $(document).ready(function () {
        var $contact = $(contactSelector);
        var $socials = $(socialsSelector);

        if ($contact.length === 0) {
            console.error(`Element ${contactSelector} not found!`);
            return;
        }

        $(window).on("scroll", function () {
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

    if (parseInt(currentIndex) === 0) {
        leftArrowOpacity();
    }
    src = "";
    selectedData[imgs.dataset.first].forEach(item => {

        if (item.name === imgs.dataset.second) {
            src = item.content[imgs.dataset.index];
            if (parseInt(currentIndex) === selectedData[imgs.dataset.first].length - 1) {
                rightArrowOpacity();
            }
            else if (parseInt(currentIndex) > 0 && parseInt(currentIndex) < selectedData[imgs.dataset.first].length) {
                bothArrowsColored();
            }
        }
    });
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
                viewImg.src = item.content[currentIndex];
            }
        });

    } else {
        leftArrowOpacity();
    }
}


function nextImage() {
    const viewImg = document.getElementById("view-img");
    currentIndex = parseInt(currentIndex) + 1;
    selectedData[currentFirstSeleted].forEach(item => {

        if (item.name === currentSecondSeleted && currentIndex < item.content.length) {
            viewImg.src = item.content[currentIndex];
        }
        else if (currentIndex === item.content.length - 1) {
            rightArrowOpacity();
        }
    });
}

function leftArrowOpacity() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#FFFFFF";
    rightArrow.style.opacity = "1";

    leftArrow.style.color = "#808080";
    leftArrow.style.opacity = "0.5";
}


function rightArrowOpacity() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#808080";
    rightArrow.style.opacity = "0.5";

    leftArrow.style.color = "#FFFFFF";
    leftArrow.style.opacity = "1";
}


function bothArrowsColored() {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    rightArrow.style.color = "#FFFFFF";
    rightArrow.style.opacity = "1";

    leftArrow.style.color = "#FFFFFF";
    leftArrow.style.opacity = "1";
}

function zoomInImage() {
    const viewImg = document.getElementById("view-img");
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");

    zoomInBtn.style.display = "none";
    zoomOutBtn.style.display = "block";
    viewImg.style.transform = "scale(1.5)";

}

function zoomOutImage() {
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
    const nextButton = document.querySelector(".nextButton");
    const prevButton = document.querySelector(".prevButton");

    prevButton.addEventListener('click', function () {
        rotateBackward();

    });

    nextButton.addEventListener('click', function () {
        rotateForward();
    });

    const innerWidith = $(window).innerWidth;
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

            if($(window).width()  < 768) {
                img.style.width = '50%';
                img.style.height = '50%';
            }

            img.style.objectFit = 'cover';
            img.setAttribute('onclick', 'showToast("Clique duas vezes para abrir a imagem")');
            img.setAttribute('ondblclick', 'openImage(this)');
            img.setAttribute('data-index', index);
            img.setAttribute('data-first', firstSeleted);
            img.setAttribute('data-second', auxSecondSeleted);
            box.appendChild(img);
            sliderFilter.appendChild(box);


            img.addEventListener('mouseenter', function () {
                if (!wheelHandler) {
                    wheelHandler = handleWheel;
                    img.addEventListener('wheel', wheelHandler, { passive: false });
                }
            });

            img.addEventListener('mouseleave', function () {
                if (wheelHandler) {
                    img.removeEventListener('wheel', wheelHandler);
                    wheelHandler = null;
                }
            });

            positionBoxes(images.length);

        } else {

            const videoUrl = `https://www.youtube.com/embed/${imgUrl}?rel=0&controls=0&showinfo=0&modestbranding=0`;

            const box = document.createElement('div');
            box.className = `box${index + 1}`;

            const iframe = document.createElement('iframe');

            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('autoplay', '1');
            iframe.setAttribute('alt', `Slide ${index + 1}`);
            iframe.setAttribute('data-index', index);

            iframe.src = videoUrl;

            iframe.style.width = '100%';
            iframe.style.height = '100%';


            if($(window).width()  < 768) {
                iframe.style.width = '50%';
                iframe.style.height = '50%';
            }
            iframe.style.objectFit = 'cover';

            box.appendChild(iframe);
            sliderFilter.appendChild(box);

            iframe.addEventListener('mouseenter', function () {
                if (!wheelHandler) {
                    wheelHandler = handleWheel;
                    iframe.addEventListener('wheel', wheelHandler, { passive: false });
                }
            });

            iframe.addEventListener('mouseleave', function () {
                if (wheelHandler) {
                    iframe.removeEventListener('wheel', wheelHandler);
                    wheelHandler = null;
                }
            });

            positionBoxes(images.length);
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

function updateSlidePosition(slide, positionIndex) {


    let positions = ['-13%', '-5%', '10%', '50%', '62%', '65%', '100%'];
    const scales = [0.2, 0.4, 0.6, 1, 0.6, 0.4, 0.2];
    let tops = ['15%', '20%', '25%', '35%', '25%', '20%', '15%']; // pc

    const zIndexes = [1, 2, 3, 4, 3, 2, 1];
    const xOffsets = ['-60%', '-40%', '-20%', '0%', '20%', '40%', '60%'];

    if ($(window).width()  < 768) {
        positions = ['-13%', '-5%', '10%', '50%', '57%', '56%', '100%'];
        tops =  ['5%', '10%', '25%', '52%', '25%', '10%', '5%'];//mobile
    }

   
    slide.style.left = positions[positionIndex];
    slide.style.transform = `scale(${scales[positionIndex]}) translate(-50%, -50%)`;
    slide.style.top = tops[positionIndex];
    slide.style.zIndex = zIndexes[positionIndex];
}





function positionBoxes(length) {

    let tops = ['15%', '20%', '25%', '35%', '25%', '20%', '15%'];
    let positions = ['-13%', '-5%', '10%', '50%', '62%', '65%', '100%']
    let vw = "60vw"
    let vh = "60vh"
    if($(window).width()  < 768){
          tops =  ['5%', '10%', '25%', '52%', '25%', '10%', '5%'];//mobile
          positions = ['-13%', '-5%', '10%', '50%', '57%', '56%', '100%']
          vw = "80vw"
          vh = "20vh"
    }
    
    const boxes = document.querySelectorAll('.portifolio-slider > div');
    boxes.forEach((box, index) => {
        box.style.position = 'absolute';
        box.style.overflow = 'hidden';
        box.style.borderRadius = '20px';
        box.style.transition = 'all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        box.style.cursor = 'pointer';
        if (length >= 5) {
            if (index === 0 || index === 6) {
                box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.2) translate(-50%,-50%)';
                box.style.top = tops[0];//'15%';
                box.style.zIndex = '1';
            }
            else if (index === 1 || index === 5) {
          box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.4) translate(-50%,-50%)';
                box.style.top = tops[1];//'20%';
                box.style.zIndex = '2';
            }
            else if (index === 2 || index === 4) {
          box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.6) translate(-50%,-50%)';
                box.style.top = tops[2];//'52%';
                box.style.zIndex = '3';
            }
            else if (index === 3) {
            box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(1) translate(-50%,-50%)';
                //box.style.top = '35%';
                 box.style.top = tops[3];//'52%';
                box.style.zIndex = '4';
            } else {
              box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.2) translate(-50%,-50%)';
                box.style.top = tops[1];//'15%';
                box.style.zIndex = '1';
            }

           
            if (index > 5) {
                box.style.left = "100%"
            } else {
                box.style.left = positions[index];
            }

        }
        else if (length === 5) {
            if (index === 4) {
          box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.4) translate(-50%,-50%)';
                box.style.top = '20%';
                box.style.zIndex = '2';
                box.style.left = "-13%";
            }
            else if (index === 1 || index === 3) {
               box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(0.6) translate(-50%,-50%)';
                box.style.top = '25%';
                box.style.zIndex = '3';

                box.style.left = index === 1 ? positions[2] : positions[5];
            }
            else if (index === 2) {
          box.style.width = vw;
                box.style.height = vh;
                box.style.transform = 'scale(1) translate(-50%,-50%)';
                box.style.top = '35%';
                box.style.zIndex = '4';
                box.style.left = '50%';
            }
        }
        else if (length === 3 || length === 4) {
            if (index === 0 || index === 2) {
         box.style.width = '80vw';
                box.style.height = '20vh';
                box.style.transform = 'scale(0.6) translate(-50%,-50%)';
                box.style.top = '25%';

                box.style.left = index === 0 ? positions[2] : positions[4];
            }
            else if (index === 1) {
                box.style.width = '20vw';
                box.style.height = '20vh';
                box.style.transform = 'scale(1) translate(-50%,-50%)';
                box.style.top = '35%';
                box.style.zIndex = '4';
                box.style.left = '50%';

                box.style.left = positions[3];
            }
        }
    });
}





function rotateForward() {

    if (isRotating) return;
    isRotating = true;

    setTimeout(() => {
        isRotating = false;
    }, 120);

    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index + slides.length) % slides.length;

        if (index === 0) {
            slide.classList.add('lastSlide');
            setTimeout(() => slide.classList.remove('lastSlide'), 100);
        }

        updateSlidePosition(slide, newPos);
    });

    const firstSlide = sliderFilterGeneral.firstElementChild;
    sliderFilterGeneral.appendChild(firstSlide.cloneNode(true));
    sliderFilterGeneral.removeChild(firstSlide);
}


function rotateBackward() {
    if (isRotating) return;
        isRotating = true;

    setTimeout(() => {
        isRotating = false;
    }, 120);

    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index) % slides.length;

        if (index === slides.length - 1) {
            slide.classList.add('firstSlide');
            setTimeout(() => slide.classList.remove('firstSlide'), 100);
        }

        updateSlidePosition(slide, newPos);
    });

    const lastSlide = sliderFilterGeneral.lastElementChild;
    sliderFilterGeneral.insertBefore(lastSlide.cloneNode(true), sliderFilterGeneral.firstChild);
    sliderFilterGeneral.removeChild(lastSlide);
}



function updateClickEvents() {
    const boxes = document.querySelectorAll('.portifolio-slider > div');
    boxes.forEach((box, index) => {
        box.addEventListener('click', function () {
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



document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') rotateForward();
    else if (e.key === 'ArrowLeft') rotateBackward();
});
