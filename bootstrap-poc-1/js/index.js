const featured_works_images = document.getElementById("featured_works_images");
const featured_works_categories = document.getElementById("featured_works_categories");
const imagePath = "images/";
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

featured_works_categories.onclick = function(e){
    if(e.target.tagName === "BUTTON"){
        load_featured_works_images(e.target.dataset.name);
    }
}