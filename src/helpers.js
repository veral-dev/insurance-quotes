//Obtiene la diferencia de años
export function yearDifference(year) {
    return new Date().getFullYear() - year
}

//Calcula el total a pagar según la marca

export function calculateBrand(brand) {
    let increment;

    switch (brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break
    }

    return increment
}

export function obteinPlan(plan) {
    return (plan === 'basico' ? 1.20 : 1.50)
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}