async function getAPI(){

    const alignment = document.createElement(".random");
    const getAPI = await fetch("https://www.dnd5eapi.co/api/alignments", requestObject);
    const jsonAPI = await getAPI.json();
    console.log(jsonAPI)
}