import type Car from "./entities/car";
import CarRepo from "./repo/carRepo";

const allCars: Car[] = CarRepo.getCars()
console.log(allCars)