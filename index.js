const getCountryByName = async (countryName)  => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    console.log(jsonData[0].name.common);
    document.getElementById("countryInfo").innerText = `Country Name: ${jsonData[0].name.common}`;
    // document.getElementById("countryInfo").innerText = `Capital: ${jsonData[0].capital}`;
    // document.getElementById("countryInfo").innerText = `Languages: ${jsonData[0].languages}`;
    // document.getElementById("countryInfo").innerText = `Population: ${jsonData[0].population}`;
};



getCountryByName("Bolivia")

