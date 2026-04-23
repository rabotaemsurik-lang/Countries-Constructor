function Country(title, capital, population, area){
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.showCountry = function (){
        return `Країна: ${this.title}, столиця: ${this.capital}, населення: ${this.population}, area: ${this.area}`;
    }
}
const countryFirst = new Country("Україна", "Київ", 35000000, 603700);
const countrySecond = new Country("Франція", "Париж", 66700000, 643801);
function showInfo(country){
    for (let key in country){
        if (typeof country[key] !== "function") {
            console.log(`${key}: ${country[key]}`);
        }
    }

}


console.log(countryFirst.showCountry());
showInfo(countryFirst);
console.log(countrySecond.showCountry());
showInfo(countrySecond);