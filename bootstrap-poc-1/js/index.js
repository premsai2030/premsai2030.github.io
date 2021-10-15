const featured_works_images = document.getElementById("featured_works_images");
const featured_works_categories = document.getElementById("featured_works_categories");
const imagePath = "images/";
const tabsId = document.getElementById("tabs");
const tabId = document.getElementById("tabId");
const tabClass = document.getElementsByClassName("tab");
let prevActiveCategory = featured_works_categories.firstElementChild;
let prevActiveTab = tabClass[0];
const featured_works_images_array = [{
        "imageName": "website-1.jfif",
        "category": "website"
    },
    {
        "imageName": "website-2.png",
        "category": "website"
    },
    {
        "imageName": "website-3.jpg",
        "category": "website"
    },
    {
        "imageName": "logos-1.png",
        "category": "logos"
    },
    {
        "imageName": "logos-2.png",
        "category": "logos"
    },
    {
        "imageName": "logos-3.png",
        "category": "logos"
    },
    {
        "imageName": "gd-1.jfif",
        "category": "graphic"
    },
    {
        "imageName": "gd-2.jpg",
        "category": "graphic"
    },
    {
        "imageName": "om-1.jpg",
        "category": "online"
    },
    {
        "imageName": "om-2.jfif",
        "category": "online"
    },
    {
        "imageName": "v-1.jfif",
        "category": "video"
    },
    {
        "imageName": "v-2.png",
        "category": "video"
    }
];

function load_featured_works_images(category) {
    let data = "";
    if (category !== "all") {
        for (let i = 0; i < featured_works_images_array.length; i++) {
            if (featured_works_images_array[i].category === category) {
                data += `<figure>
            <img src=${imagePath+featured_works_images_array[i].imageName} alt="">
        </figure>`;
            }
        }
    } else {
        for (let i = 0; i < featured_works_images_array.length; i++) {
            data += `<figure>
            <img src=${imagePath+featured_works_images_array[i].imageName} alt="">
        </figure>`;
        }
    }
    featured_works_images.innerHTML = data;
}
load_featured_works_images("all");

featured_works_categories.onclick = function (e) {
    if (e.target.tagName === "BUTTON") {
        prevActiveCategory.classList.remove("active");
        e.target.classList.add("active");
        prevActiveCategory = e.target;
        load_featured_works_images(e.target.dataset.name);
    }
}

tabsId.onclick = (e) => {
    let target = e.target,
        dataId, documentObject;
    if (target.tagName === "DIV") {
        documentObject = target;
        dataId = target.dataset.id;
    }
    if (target.tagName === "STRONG") {
        documentObject = target.parentNode;
        dataId = target.parentNode.dataset.id;
    }
    if (dataId) {
        tabId.innerHTML = dataId;
        prevActiveTab.classList.remove("active");
        documentObject.classList.add("active");
        prevActiveTab = documentObject;
    }

    // for(let i = 0 ; i < tabClass.length ; i++ ){
    //     if(tabClass[i].dataset.id !== dataId){
    //         tabClass[i].style.borderBottomColor = "#abb3b4" ;
    //         tabClass[i].style.borderTop = "" ;
    //     }
    //     else{
    //         tabClass[i].style.borderTop = "4px solid #1bbc9b" ;
    //         tabClass[i].style.borderBottomColor = "white" ;
    //     }
    // }
}