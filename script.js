
const submitBtn = document.getElementById('submitBtn'); //retroeves submit button element from html

submitBtn.addEventListener('click', async () => {
    const radios = document.querySelectorAll('input[type="radio"]'); // collect all the radio buttons on the webpage and save them in a radios list
    let selectedColor = ''; 

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) { //checks if radio input element is selected by user
            selectedColor = radios[i].value; // assigns checked box (radio) to equal selected color
        }
    }

    console.log('Selected Color:', selectedColor);

    const response = await fetch('houses.json');
    const data = await response.json();
    
    let house = '';
    for (let i = 0; i < data.House.length; i++) {
        if (data.House[i].Color === selectedColor) { //checks to see if the selected color matches house object color (iterates through the array to see which one matches)
            house = data.House[i];
        }
        
        }
    

    if (house) {
        const resultContainer = document.getElementById('result');
        resultContainer.textContent = ''; // Clear previous content
        
        const houseName = document.createElement('h2');
        houseName.textContent = `You belong to ${house.House}!`;
        resultContainer.appendChild(houseName);

        const characteristicsList = document.createElement('ul'); //list element, with list items that contain house info
        const characteristicsListItem = document.createElement('li');
        characteristicsListItem.textContent = `Founder: ${house.Founder}`;
        characteristicsList.appendChild(characteristicsListItem);
        const colorItem = document.createElement('li');
        colorItem.textContent = `Color: ${house.Color}`;
        characteristicsList.appendChild(colorItem);
        const animalItem = document.createElement('li');
        animalItem.textContent = `Animal: ${house.Animal}`;
        characteristicsList.appendChild(animalItem);
        const ghostItem = document.createElement('li');
        ghostItem.textContent = `Ghost: ${house.Ghost}`;
        characteristicsList.appendChild(ghostItem);
        const commonRoomItem = document.createElement('li');
        commonRoomItem.textContent = `Common Room: ${house.CommonRoom}`;
        characteristicsList.appendChild(commonRoomItem);
        const famousCharactersItem = document.createElement('li');
        famousCharactersItem.textContent = `Famous Characters: ${house.FamousCharacters.join(', ')}`; // separates name of characters in commas
        characteristicsList.appendChild(famousCharactersItem);

        resultContainer.appendChild(characteristicsList);
    } 
});
