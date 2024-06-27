fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countries = data;

        // a. Get all the countries from Asia continent /region using Filter method
        const asianCountries = countries.filter(country => country.region === 'Asia');
        const asianCountriesList = document.getElementById('asian-countries');
        asianCountries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name.common;
            asianCountriesList.appendChild(listItem);
        });

        // b. Get all the countries with a population of less than 2 lakhs using Filter method
        const smallPopulationCountries = countries.filter(country => country.population < 200000);
        const smallPopulationCountriesList = document.getElementById('small-population-countries');
        smallPopulationCountries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name.common;
            smallPopulationCountriesList.appendChild(listItem);
        });

        // c. Print the following details name, capital, flag, using forEach method
        const countryDetailsList = document.getElementById('country-details');
        countries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: <img src="${country.flags[0]}" alt="${country.name.common} flag" width="50">`;
            countryDetailsList.appendChild(listItem);
        });

        // d. Print the total population of countries using reduce method
        const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
        document.getElementById('total-population').textContent = `Total Population: ${totalPopulation.toLocaleString()}`;

        // e. Print the country that uses US dollars as currency
        const usdCountries = countries.filter(country => {
            if (country.currencies) {
                return Object.keys(country.currencies).includes('USD');
            }
            return false;
        });
        const usdCountriesList = document.getElementById('usd-countries');
        usdCountries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name.common;
            usdCountriesList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching countries:', error));
