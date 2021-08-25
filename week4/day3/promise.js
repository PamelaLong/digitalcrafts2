async function getFoxPics(){

    const foxContainer = document.querySelector(".fox-images");
    const foxPic = document.createElement(".img");
    const foxPics = await fetch("https://randomfox.ca/floof/", requestObject);
    const jsonfoxs = await foxPics.json();
    foxPic.src = jsonfoxs.image
    foxPic.height = "400";
    foxPic.width = "600";
    foxContainer.append(foxPic);
    return jsonfoxs;
}
getFoxPics();