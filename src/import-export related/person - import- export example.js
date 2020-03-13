console.log('From person.js');


export const isAdult = (x) => {
    if(x >= 18){
        return 'yes! adult'
    }else{
        return 'nope! not adult'
    }
}

export const canDrink = (x) => {
    if(x >= 21){
        return 'please drink'
    }else{
        return 'do not drink'
    }
}

const isSenior = (x) => x>=60;

export default isSenior;
