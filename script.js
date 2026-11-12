function showMessage()
{
    document.getElementById("message").textContent = "¡Thanks for your visit!"
}

let number = 0;

function updateCounter()
{
    document.getElementById("counter").textContent = number;
}

function increase()
{
    number++;
    updateCounter();
}

function decrease()
{
    number--;
    updateCounter();
}

function restart()
{
    number = 0;
    updateCounter();
}

let actualColor = 0;


const colors = [
    "#de7272",
    "#ffca88",
    "#fff6a9",
    "#b4e4d6",
    "#a4ce8b",
    

];

function changeColor()
{
    const box = document.getElementById("colorBox");

    actualColor = (actualColor + 1) % colors.length;

    box.style.backgroundColor = colors[actualColor];
}



function addElement()
{
    const initialData = document.getElementById ("newPlanet");
    const text = initialData.value.trim();

    if (text === "")

        {
            alert (" please, put a planet on the field.")
            return;
        }
    
        const newLi = document.createElement("li");
        newLi.textContent = text;

        document.getElementById("dynamicList").appendChild(newLi);

        initialData.value = "";
        initialData.focus();
}

function simpleCalc()
{
    const n1 = Number (document.getElementById("numberOne").value);
    const n2 = Number (document.getElementById("numberTwo").value);

    const result = n1 * n2 ;

    document.getElementById("result").textContent= "Resultado: "+result;
}

const images = [


    {
        image: "https://cursin.net/wp-content/uploads/2024/05/astronomia-curso-gratuito.jpg",
        title: "Image Number One",
        description: "Image Numer One"
    },

    {
        image: "https://tse2.mm.bing.net/th/id/OIP.ZbtENk1TieBFTjloUmw46AHaEO?r=0&w=1000&h=571&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Image Number One",
        description: "Image Numer One"
    },

    {
        image: "https://t4.ftcdn.net/jpg/06/45/61/51/360_F_645615117_0b5jnbTFNpIICMpFG3iAdFPraXrosxUG.jpg",
        title: "Image Number One",
        description: "Image Numer One"
    }


];

let index = 0; 

function showImages()
{
    const image = images[index];

    document.getElementById("carouselImage").src = image.image;
    document.getElementById("carouselTitle").textContent = image.title;
    document.getElementById("descriptionCarousel").textContent = image.description;
}
function changeImage(direction)
{
    index = (index + direction + images.length) % images.length;
    showImages();

}

function nextImage()
{
    changeImage(1);
}