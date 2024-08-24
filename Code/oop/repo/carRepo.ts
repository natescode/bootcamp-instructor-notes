import Car from "../entities/car";

class CarRepo {
    static #cars: Car[] = [{
        Make: "Toyota",
        Model: "RAV4",
        Year: 2019,
        Price: 23000,
        isOwned: true
    }, {
        Make: "Jeep",
        Model: "Compass",
        Year: 2015,
        Price: 16800,
        isOwned: false
    }];
    public static getCars(): Car[] {
        return this.#cars
    }

    public static getCarsByMake(make: string): Car[] {
        return this.#cars.filter((car) => car.Make.toLowerCase() === make.toLowerCase())
    }

    public static addCar(car: Car): void {
        this.#cars.push(car)
    }
}

export default CarRepo;