const filterTab = document.querySelectorAll("#filter-tab button");
const filterSubcategory = document.querySelectorAll("#subcategory .tablinks");
const filterableItems = document.querySelectorAll("#filter-items .element");
const filterMain =  document.querySelectorAll("#main-filter button");
let firstSeleted = "3D Environment";
let secondSeleted = "Kitchen";

let selectedData = {};

const messageData = {
    "3D Environment" : 
        {
            messageExternal : "The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",
            messageInternal : "Creating virtual lifestyles to insert a previously modeled product, in order to show it and allow the final consumer to visualize it in a home lifestyle. The latest trends in decoration in harmony with the product are used in each scene, to bring reality, beauty and modernity.",}
    ,
    "3D Product Modeling" : 
        {
            messageExternal : "Your product is completely modeled (drawn) through a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",
            messageInternal : "Based on the product’s project or a photgraph and all its dimensions, the product is completely modeled (drawn) using a 3D software, which allows to bring the same reality of a photograph, with absolute fidelity to details, textures, colors and finish.",}
    ,
    "Photo Fusion" : 
        {
            messageExternal : "Apply your product’s photograph in a perfect virtual lifestyle, making it part of the scene.",
            messageInternal : "Apply your product’s photograph in a perfect virtual lifestyle, making it part of the scene.",}
    ,
    "3D Animations" : 
        {
            messageExternal : "We develop 3D animations, in order to optimize demonstration and understanding of all details, differentials, colors and functions of a particular product.",
            messageInternal : "We develop 3D animations and videos in order to optimize demonstration and understanding of all details, differentials, colors and functions of a particular product. Furthermore, we also produce instructional videos with step-by-step instructions for the assembly process, in order to help the final customer.",}
    ,
    "Videos" : 
        {
            messageExternal : "We create institutional, promotional and product-assembly videos. We give movement to your product, showing all its functionalities and differentials.",
            messageInternal : "We create institutional, promotional and product-assembly videos. We give movement to your product, showing all its functionalities and differentials.",}
    ,
    "Graphic Design" : 
        {
            messageExternal : "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers.",
            messageInternal : "We create and develop catalogs, brochures and promotional materials, in order to better introduce your products to your customers. The art is produced with harmony, using modern and different layouts that stand out among other competitors.",}
    
};



const filtersDataAll = {
    "3D Environment": [
        { 
            name: "Kitchen", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" ]},
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" ] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" ] },
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" , "", "" , "", "" ] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" ] },
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" , "", "" , "", "" ] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", "" , "", "" ] }
    ],
    "3D Product Modeling": [
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www"]},
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Kitchen", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www"]},
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ] },
        { name: "Kitchen", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ] },
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/"]},
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI"] },
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI"] },
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Kitchen", count: 12, content: [""]},
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI"] }
    ],
    "Photo Fusion": [
        { name: "Kitchen", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI"] },
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI"] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www"]},
        { name: "Bath", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Bedroom", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Kitchen", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Mattress", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", "", ""] },
        { name: "Living Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Dining Room", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] },
        { name: "Home Appliances & Electronics", count: 12, content: ["https://www.youtube.com/watch?v=6Q3pBMtJclI", "https://www.youtube.com/watch?v=6Q3pBMtJclI", ""] }
    ],
    "3D Animations": [
        { name: "3D Animations", count: 6, content: ["n1CxOlidEaU", "RU1vQA5HTAQ", "h2pPyhutP6w", "2uxaGPSy6e0", "5Q2RufAKtSo", "uLQ5G8_nAb8"] },
        { name: "Products Assembly Animations", count: 6, content: ["IjwlW_hbMOs", "IhE4gQoi1_k", "YG9pMUFSWGI", "3E6HfOqGHEg", "TMm-gSnEASE", "HG9sdARThb8"] }
    ],
    "Videos": [
        { name: "Home and Rack", count: 1, content: ["mkLuv2DpCV0"] },
        { name: "Living Room", count: 1, content: ["_avjE_AQbN0"] },
        { name: "Dining Room", count: 1, content: ["7X8p4VyUUSM"] },
        { name: "Kitchen", count: 12, content: ["SHoLLLgNonA"] },
        { name: "Others", count: 12,content: ["JXUVVpe9l-E", "gq2kBAcVo9I", "mQN7zFab390"] }
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
    
    const filterTabContainer = document.getElementById('filter-tab');
    const subcategoryContainer = document.getElementById('subcategory');
    const filterButtonContainer = document.getElementById('main-filter');
    const filterContent = document.getElementById('filter-items');

    const allButton = createButton("All", "filter-btn filter-btn-all", "all", "all");
    const byCategoryButton = createButton("By Category", "filter-btn filter-btn-category", "category", "category");
    filterButtonContainer.appendChild(allButton);
    filterButtonContainer.appendChild(byCategoryButton);

    let i = 0;
    let a = "";
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category, 
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;

        selectedData[category].forEach(subcategory => {
            const subcategoryButton = createSubcategoryButtonWithCount(subcategory.name, "tablinks", category + subcategory.name, subcategory.count);
            subcategoryContainer.appendChild(subcategoryButton);
            const imgContens = createImgGallery("w-33 element", category+subcategory.name, "assets/img/img1.webp");
            filterContent.appendChild(imgContens);
        });
    }

    // 2 Query the filter tab buttons after append to DOM
    const filterTab = document.querySelectorAll("#filter-tab button");
    const filter = document.querySelectorAll("#main-filter button");
    
    if (filterTab.length > 0) {
        filterTab.forEach(tab => tab.addEventListener("click", filterItems));
        filterTab[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }
    
    if (filter.length > 0) {
        console.log(filter);
        filter.forEach(tab => tab.addEventListener("click", mainFilter));
        filter[0].click();
    } else{
        console.error("No filter tab buttons found.");
    } 
    
    renderGallery(selectedData, firstSeleted, secondSeleted);
});

function createButton(text, className, dataFilter, id) {
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-filter", dataFilter);
    button.setAttribute("id", id)
    button.innerHTML = `${text}`;
    return button;
}


function createImgGallery(className, dataFilter, url) {
    const div = document.createElement("div");
    div.className = className;
    div.setAttribute("data-filter", dataFilter);
    div.innerHTML = `<img src="${url}" alt="" height="350px"></img>`;
    return div;
}


function createButtonWithCount(text, className, dataFilter, count) {
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-filter", dataFilter);
    button.innerHTML = `${text} <span class="count-badge" style="pointer-events: none;">${count}</span>`;
    return button;
}



function createSubcategoryButtonWithCount(text, className, dataFilter, count) 
{
    console.log(`${dataFilter}`);
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-name", dataFilter);
    button.innerHTML = `${text} <span class="count-badge" style="pointer-events: none;">${count}</span>`;
    return button;
}

function filterItems(event) {
    const activeTab = document.querySelector("#filter-tab .active");


    if (activeTab) {
        activeTab.classList.remove("active");
    }
    event.target.classList.add("active");


    const filterSubcategory = document.querySelectorAll("#subcategory .tablinks");
    filterSubcategory.forEach(subcategory => {
        if (subcategory.dataset.name.includes(event.target.dataset.filter)) {
            subcategory.classList.remove("hidden");
            firstSeleted = subcategory.dataset.name;
        } else {
            subcategory.classList.add("hidden");
        }
    });

    const selectedCategory = event.target.dataset.filter;
    const filteredVideos = filtersDataAll[selectedCategory];
    firstSeleted = selectedCategory;

   

}


function filterContent(event) {
    const activeTab = document.querySelector("#filter-tab .active");


    if (activeTab) {
        activeTab.classList.remove("active");
    }
    event.target.classList.add("active");
    secondSeleted = event.target.dataset.name;

    // Render the filtered gallery items
    renderGallery(selectedData, firstSeleted, secondSeleted);

    /*filterableItems.forEach(image => {
                
        if(image.dataset.name === (firstSeleted + secondSeleted)){
            console.log(image.dataset.name );
            
            return image.classList.replace("hide", "show");
        } 
        console.log(image.dataset.name );
        image.classList.add("hide");

        
    });*/
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
    const filterTabContainer = document.getElementById('filter-tab');
    const subcategoryContainer = document.getElementById('subcategory');



    let i = 0;
    filterTabContainer.innerHTML = "";
    subcategoryContainer.innerHTML = "";
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category, 
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;


        selectedData[category].forEach(subcategory => {
            const subcategoryButton = createSubcategoryButtonWithCount(subcategory.name, 
                "tablinks", category+subcategory.name, subcategory.count);
                
            subcategoryContainer.appendChild(subcategoryButton);
        });
    }

    const filterTab = document.querySelectorAll("#filter-tab button");
    const filter = document.querySelectorAll("#main-filter button");
    const filterSubcategory = document.querySelectorAll("#subcategory button");
    
    if (filterTab.length > 0) {
        filterTab.forEach(tab => tab.addEventListener("click", filterItems));
        filterTab[0].click();
    } else {
        console.error("No filter tab buttons found.");
    }

    if (filterSubcategory.length > 0) {
        console.log(filterSubcategory);
        filterSubcategory.forEach(tab => tab.addEventListener("click", filterContent));
    } else{
        console.error("No filter tab buttons found.");
    } 
    
    if (filter.length > 0) {
        console.log(filter);
        filter.forEach(tab => tab.addEventListener("click", mainFilter));
    } else{
        console.error("No filter tab buttons found.");
    } 
}


function renderGallery(filteredVideos, firstSeleted, secondSeleted) {
    const galleryContainer = document.getElementById("filter-items");
    galleryContainer.innerHTML = "";    
    console.log(firstSeleted);
    galleryContainer.innerHTML = `<div class="w-100 flex-center card" style="margin:10px; padding:10px;">${messageData[firstSeleted].messageExternal}</div>`;


    let auxSecondSeleted = secondSeleted.replace(firstSeleted,"");
    filteredVideos[firstSeleted].forEach(item => {
        
        if(item.name === auxSecondSeleted){
            item.content.forEach(videoId => {
                const image = document.createElement("div");
                image.className = "w-33 element";
                image.setAttribute("data-name", firstSeleted + secondSeleted);
                
                /*const imageFrame = document.createElement("img");
                imageFrame.src = "./assets/img/img1.webp"; //FIXME NOT WORKING
                imageFrame.setAttribute("height", "150px")

                imageFrame.height = "150px";
                imageFrame.width = "150px";*/
                const imageFrame = document.createElement("iframe");
                imageFrame.src = `https://www.youtube.com/embed/VOTWEIgbKSKQI-ky?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`;
                imageFrame.style.border = "none";
                imageFrame.style.width = "420px";
                imageFrame.style.height = "315px";
                imageFrame.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
                imageFrame.setAttribute("allowfullscreen", "");

                image.appendChild(imageFrame);
                galleryContainer.appendChild(image);
            }); 
        }
           
    });
    const internalMessage = document.createElement("div");
    internalMessage.innerHTML = `<div class="w-100 flex-center card" style="margin:10px; padding:10px;">${messageData[firstSeleted].messageInternal}</div>`;
    galleryContainer.appendChild(internalMessage);
}
