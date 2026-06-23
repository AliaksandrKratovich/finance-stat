export class iconsMapper {
    static mapFromDb(data) {
        return this.#iconsDict[data];
    }

    static #iconsDict =  {
        home: 'fa-house',
        mobile: 'fa-mobile-screen-button',
        present: 'fa-gift',
        bank: 'fa-building-columns',
        prepaid: 'fa-credit-card',
        other: 'fa-circle-question',
        heart: 'fa-heart-pulse',
        notebook: 'fa-notebook',
        education: 'fa-graduation-cap',
        hotel: 'fa-hotel',
        repairs: 'fa-hammer',
        payment: 'fa-money-bill-transfer',
        couple: 'fa-people-group',
        road: 'fa-road',
        sport: 'fa-dumbbell',
        transport: 'fa-bus',
        refueling: 'fa-gas-pump',
        purse: 'fa-wallet',
        car: 'fa-car-side',
        rent: 'fa-key',
        cigarettes: 'fa-joint',
        pets: 'fa-paw',
        family: 'fa-people-roof',
        games: 'fa-gun',
        burger: 'fa-burger',
        cat: 'fa-cat',
        cafe: 'fa-utensils',
        web: 'fa-globe',
        medicine: 'fa-briefcase-medical',
        products: 'fa-basket-shopping'
    };
}