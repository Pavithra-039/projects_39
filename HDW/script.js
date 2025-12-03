const furnitureImages = {
  sofa: "https://i.ibb.co/mCxhB08/sofa.png",
  lamp: "https://i.ibb.co/7QjBLP1/lamp.png",
  table: "https://i.ibb.co/r3tDf8s/table.png",
  plant: "https://i.ibb.co/0f2ScDL/plant.png"
};

function addFurniture() {
  const select = document.getElementById("furnitureSelect");
  const choice = select.value;
  const room = document.getElementById("room");

  const img = document.createElement("img");
  img.src = furnitureImages[choice];
  img.classList.add("furniture");

  
  img.style.top = Math.random() * 300 + "px";
  img.style.left = Math.random() * 300 + "px";

  room.appendChild(img);
}
