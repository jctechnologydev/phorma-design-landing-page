const filterTab = document.querySelectorAll("#filter-category button");
const filterSubcategory = document.querySelectorAll("#filter-subcategory .tablinks");
const filterableItems = document.querySelectorAll("#filter-items .element");
const filterMain = document.querySelectorAll("#main-filter button");
let sliderFilterGeneral = document.querySelector('.portifolio-slider');


let isAnimating = false;
let wheelTimeout;

let wheelHandler = null;
let currentInd = 3; 
let intitialLength = 7;


let firstSeleted = "3D Environment";
let secondSeleted = "Kitchen";

let currentFirstSeleted = "";
let currentSecondSeleted = "";

let currentIndex = 0;
let reverse = false;

let left = 0;
let center = 1;
let right = 2;

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
            name: "Modelagem 3D", count: 7, content: [
                "../assets/Imagens/Imagens3D/Cozinha Esmeralda - Composição 01_Lâmina Mel - Cinza Supremo_Amb_ok copy.jpg",
                "./assets/Imagens/Imagens3D/Cozinha Ibiza_Lamina Mel - Ripado - Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Comp 03_Montana-Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Completa_Comp 01_Montana-Grafite_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha KIT LIVIA 2MT 8P 2G_Amb_ok.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Prisma_Amb_ok.jpg"]
        },
        {
            name: "Fotofusão", count: 2, content: [ 
                "../assets/Imagens/Imagens3D/Cozinha Esmeralda - Composição 01_Lâmina Mel - Cinza Supremo_Amb_ok copy.jpg",
                "./assets/Imagens/Imagens3D/Cozinha Ibiza_Lamina Mel - Ripado - Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Esmeralda - Composição 01_Lâmina Mel - Cinza Supremo_Amb_ok copy.jpg",
                "./assets/Imagens/Imagens3D/Cozinha Ibiza_Lamina Mel - Ripado - Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Comp 03_Montana-Branco_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Innova_Completa_Comp 01_Montana-Grafite_Amb_ok copy.jpg",
                "../assets/Imagens/Imagens3D/Cozinha KIT LIVIA 2MT 8P 2G_Amb_ok.jpg",
                "../assets/Imagens/Imagens3D/Cozinha Prisma_Amb_ok.jpg"
            ]
        },
        
    ],
    "Animações Digitais": [
        { name: "Home and Rack", count: 1, content: ["mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0","7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM","SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA","JXUVVpe9l-E", "gq2kBAcVo9I", "mQN7zFab390", "mQN7zFab390",        "mQN7zFab390", "mQN7zFab390","mQN7zFab390"] }

    ],
    "Design Gráfico": [
        { name: "Images", count: 1, content: ["../assets/Imagens/Imagens Fotofusão/Banqueta Home_Amb_ok"] },
    ]
    
};

/*"Videos": [
        { name: "Home and Rack", count: 1, content: ["mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0", "mkLuv2DpCV0"] },
        { name: "Living Room", count: 1, content: ["_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0", "_avjE_AQbN0"] },
        { name: "Dining Room", count: 1, content: ["7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM", "7X8p4VyUUSM"] },
        { name: "Kitchen", count: 1, content: ["SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA", "SHoLLLgNonA"] },
        { name: "Others", count: 3, content: ["JXUVVpe9l-E", "gq2kBAcVo9I", "mQN7zFab390", "mQN7zFab390",        "mQN7zFab390", "mQN7zFab390","mQN7zFab390"] }
    ]*/

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
                if(selectedData[category].length === 1){
    
                }else{
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
        // renderGallery(selectedData, firstSeleted, secondSeleted);
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
        seletedSec = secondSeleted.replace(firstSeleted, "");
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
            intitialLength = item.content.length + 1;
            
            createSliderBoxes(item.content,sliderFilter);

        
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
                viewImg.src = item.content[currentIndex];
            }
        });
        
    } else {
        leftArrowOpacity();
    }
}


function nextImage(){
    const viewImg = document.getElementById("view-img");
    currentIndex = parseInt(currentIndex) + 1;
    selectedData[currentFirstSeleted].forEach(item => {

        if (item.name === currentSecondSeleted && currentIndex < item.content.length) {
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
    const nextButton = document.querySelector(".nextButton");
    const prevButton = document.querySelector(".prevButton");

    console.log(nextButton);
    console.log(prevButton);

    prevButton.addEventListener('click', function() {
        console.log("click");
        rotateBackward();
        
    });

    nextButton.addEventListener('click', function() {
        console.log("click");
        rotateForward();
    });

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
                    sliderFilter.appendChild(box);
            
            
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
                   
                    iframe.src = videoUrl;
    
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.objectFit = 'cover';
                    
                    
                    box.appendChild(iframe);
                    sliderFilter.appendChild(box);
            
                
            
                    iframe.addEventListener('mouseenter', function() {
                        if (!wheelHandler) {
                            wheelHandler = handleWheel;
                            iframe.addEventListener('wheel', wheelHandler, { passive: false });
                        }
                    });
            
                    iframe.addEventListener('mouseleave', function() {
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

function positionBoxes(length) {
    const boxes = document.querySelectorAll('.portifolio-slider > div');
    boxes.forEach((box, index) => {
        box.style.position = 'absolute';
        box.style.overflow = 'hidden';
        box.style.borderRadius = '20px';
        box.style.transition = 'all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        box.style.cursor = 'pointer';
        if(length >= 5  ) {
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

            const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '85%'];
            if (index > 6){
                box.style.left = "100%"
            }else{
                box.style.left = positions[index];
            }
            
        }
        else if(length === 5) {
            if (index === 4) {
                box.style.width = '100vh';
                box.style.height = '60vh';
                box.style.transform = 'scale(0.4) translate(-50%,-50%)';
                box.style.top = '20%';
                box.style.zIndex = '2';
                box.style.left = "-13%";
            }
            else if (index === 1 || index === 3) {
                box.style.width = '100vh';
                box.style.height = '60vh';
                box.style.transform = 'scale(0.6) translate(-50%,-50%)';
                box.style.top = '25%';
                box.style.zIndex = '3';
                const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '100%'];
                box.style.left = index === 1 ? positions[2]: positions[5];
            }
            else if (index === 2) { 
                box.style.width = '60vw';
                box.style.height = '60vh';
                box.style.transform = 'scale(1) translate(-50%,-50%)';
                box.style.top = '35%';
                box.style.zIndex = '4';
                box.style.left = '50%';
            }        
        }
        else if(length === 3 || length === 4) {
            if (index === 0 || index === 2) {
                box.style.width = '100vh';
                box.style.height = '60vh';
                box.style.transform = 'scale(0.6) translate(-50%,-50%)';
                box.style.top = '25%';
                box.style.zIndex = '3';
                const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '100%'];
                box.style.left = index  === 0 ? positions[2]: positions[4];
            }
            else if (index === 1) { 
                box.style.width = '60vw';
                box.style.height = '60vh';
                box.style.transform = 'scale(1) translate(-50%,-50%)';
                box.style.top = '35%';
                box.style.zIndex = '4';
                box.style.left = '50%';
                const positions = ['-13%', '-5%', '10%', '50%', '71%', '85%', '100%'];
                box.style.left =  positions[3];
            }
        }
        else if (length === 1) { 
            box.style.width = '60vw';
            box.style.height = '60vh';
            box.style.transform = 'scale(1) translate(-50%,-50%)';
            box.style.top = '35%';
            box.style.zIndex = '4';
            box.style.left = '50%';
        }
        
    });
}





// (next slide)
function rotateForward() {
    console.log(intitialLength);
    if((intitialLength-1) <= 3) return;
    currentInd = (currentInd + 1) % intitialLength;
    
    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index - 1 + slides.length) % slides.length;
        
        if (index === 0) {
            slide.classList.add('lastSlide');
            setTimeout(() => slide.classList.remove('lastSlide'), 100);
        }
        
        updateSlidePosition(slide, newPos);
    });
    
    const firstSlide = sliderFilterGeneral.firstElementChild;
    sliderFilterGeneral.appendChild(firstSlide.cloneNode(true));
    sliderFilterGeneral.removeChild(firstSlide);
    
    //updateClickEvents();
}


function rotateBackward() {
    if((intitialLength-1) <= 3) return;
    currentInd = (currentInd - 1 + intitialLength) % intitialLength
    
    const slides = Array.from(sliderFilterGeneral.children);
    slides.forEach((slide, index) => {
        slide.classList.remove('firstSlide', 'lastSlide');
        let newPos = (index + 1) % slides.length;
        
        if (index === slides.length - 1) {
            slide.classList.add('firstSlide');
            setTimeout(() => slide.classList.remove('firstSlide'), 100);
        }
        
        updateSlidePosition(slide, newPos);
    });
    
    const lastSlide = sliderFilterGeneral.lastElementChild;
    sliderFilterGeneral.insertBefore(lastSlide.cloneNode(true), sliderFilterGeneral.firstChild);
    sliderFilterGeneral.removeChild(lastSlide);
    
    //updateClickEvents();
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
