const filterTab = document.querySelectorAll("#filter-tab button");
const filterSubcategory = document.querySelectorAll("#subcategory .tablinks");
const filterableItems = document.querySelectorAll("#filter-items .element");
const filterMain =  document.querySelectorAll("#main-filter button");

let selectedData = {};

const filtersDataAll = {
    "3D Environment": [
        { name: "Kitchen", count: 12 },
        { name: "Bath", count: 12 },
        { name: "Bedroom", count: 12 },
        { name: "Living Room", count: 12 },
        { name: "Dining Room", count: 12 },
        { name: "Mattress", count: 12 },
        { name: "Home Appliances & Electronics", count: 12 }
    ],
    "3D Product Modeling": [
        { name: "Kitchen", count: 12 },
        { name: "Bath", count: 12 },
        { name: "Bedroom", count: 12 },
        { name: "Living Room", count: 12 },
        { name: "Mattress", count: 12 },
        { name: "Home Appliances & Electronics", count: 12 }
    ],
    "Photo Fusion": [
        { name: "Kitchen", count: 12 },
        { name: "Bath", count: 12 },
        { name: "Bedroom", count: 12 },
        { name: "Living Room", count: 12 },
        { name: "Dining Room", count: 12 },
        { name: "Home Appliances & Electronics", count: 12 }
    ],
    "3D Animations": [
        { name: "3D Animations", count: 12 },
        { name: "Products Assembly Animations", count: 12 }
    ],
    "Videos": [
        { name: "Home and Rack", count: 12 },
        { name: "Living Room", count: 12 },
        { name: "Dining Room", count: 12 },
        { name: "Kitchen", count: 12 },
        { name: "Others", count: 12 }
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
        });
    });
}

for (const category in filtersDataAll) {
    filtersDataAll[category].forEach(item => {
        const name = item.name;
        if (groupedByCategory[name]) {

            groupedByCategory[name].push({
                    name: category,
                    count: item.count, 
        });
        }
    });
}

console.log(groupedByCategory);

document.addEventListener("DOMContentLoaded", () => {
    
    const filterTabContainer = document.getElementById('filter-tab');
    const subcategoryContainer = document.getElementById('subcategory');
    const filterButtonContainer = document.getElementById('main-filter');

    const allButton = createButton("All", "filter-btn filter-btn-all", "all", "all");
    const byCategoryButton = createButton("By Category", "filter-btn filter-btn-category", "category", "category");
    filterButtonContainer.appendChild(allButton);
    filterButtonContainer.appendChild(byCategoryButton);

    let i = 0;
    for (const category in selectedData) {
        const buttonClass = i === 0 ? "tablinks active" : "tablinks";
        const button = createButtonWithCount(category, buttonClass, category, 
            selectedData[category].length);
        filterTabContainer.appendChild(button);
        i++;


        selectedData[category].forEach(subcategory => {
            const subcategoryButton = createSubcategoryButtonWithCount(subcategory.name, 
                "tablinks", category, subcategory.count);
            subcategoryContainer.appendChild(subcategoryButton);
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
    button.innerHTML = `${text} <span class="count-badge">${count}</span>`;
    return button;
}



function createSubcategoryButtonWithCount(text, className, dataFilter, count) 
{
    const button = document.createElement("button");
    button.className = className;
    button.setAttribute("data-name", dataFilter);
    button.innerHTML = `${text} <span class="count-badge">${count}</span>`;
    return button;
}

function filterItems(event) {
    console.log(event.target.dataset.filter);
    document.querySelector("#filter-tab .active").classList.remove("active");
    event.target.classList.add("active");

    const filterSubcategory = document.querySelectorAll("#subcategory .tablinks");
    filterSubcategory.forEach(image => {
        if (image.dataset.name === event.target.dataset.filter) {
            image.classList.remove("hidden");
        } else {
            image.classList.add("hidden");
        }
    });
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
                "tablinks", category, subcategory.count);
                
            subcategoryContainer.appendChild(subcategoryButton);
        });
    }

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
    } else{
        console.error("No filter tab buttons found.");
    } 
}