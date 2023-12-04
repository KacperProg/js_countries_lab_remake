const getCountryByName = async (countryName)  => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    const name = jsonData[0].name.common;
    const capital = jsonData[0].capital[0];
    const languages = jsonData[0].languages;
    const languagesArr = [];
        
    for (const key in languages) {
        languagesArr.push(languages[key]);
    }
    
    const population = jsonData[0].population;
    console.log(languages);
    document.getElementById("countryInfo").innerText = `Country Name: ${name}\nCapital: ${capital}\nLanguages: ${languagesArr.join()}\nPopulation: ${population}`;
};

getCountryByName("South Africa")
