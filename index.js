const getCountryByName = async (countryName)  => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    const name = jsonData[0].name.common;
    // document.querySelector("body").appendChild(name);
    const capital = jsonData[0].capital[0];
    // document.querySelector("body").appendChild(capital);
    const languages = jsonData[0].languages;
    // languages.array.forEach(element => {
        
    for (const key in languages) {
        
        console.log(`Found the value '${languages[key]}' at key '${key}'`);
    }
    // });
    const population = jsonData[0].population;
    // document.querySelector("body").appendChild(population);

    console.log(languages);

    

    document.getElementById("countryInfo").innerText = `Country Name: ${name}\nCapital: ${capital}\nLanguages: ${languages}\nPopulation: ${population}`;
    // document.getElementById("countryInfo").innerText = ``;
    // document.getElementById("countryInfo").innerText = ``;
    // document.getElementById("countryInfo").innerText = ``;

    // document.querySelector("body").appendChild()
};



getCountryByName("Bolivia")

// document.querySelector("button").addEventListener("", getCountryByName);