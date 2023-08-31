// Змініть код лише під цим рядком
class Thermostat {
    constructor(F) {
        this._F = F;
    }
    get temperature() {
        const C = 5 / 9 * (this._F - 32);
        return C;
    }
    set temperature(updatedTemp) {
        const F = updatedTemp * 9.0 / 5 + 32
        this._F = F;
    }
}
// Змініть код лише над цим рядком

const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
console.log(thermos);
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм
console.log(temp);