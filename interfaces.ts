interface type_city {
    name: string;
    year: number;
    old: boolean;
    summary(): string;
}

const city = {
    name: 'Tokyo',
    year: 1998,
    old: true,
    summary(): string {
        return this.name;
    }
}

const printCity = (city: type_city): void => {
    console.log(`${city.name} - ${city.year} - ${city.old}`);
}

printCity(city);