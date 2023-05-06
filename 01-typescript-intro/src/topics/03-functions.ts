function addNumbers(a : number, b : number) : number {

    return a + b;


}

const addNumberArrow = (a :number, b : number) : string =>{
    return `${ a + b }`;
}

function multiply(firstNumber : number, secondNUmber? : number, base : number = 2){
    return firstNumber * base;
}



// const result : number = addNumbers(1,2);
// const result2 : string = addNumberArrow(4,6);
// const result3 : number = multiply(5); 

// console.log({ result, result2, result3 });


interface Character{
    name: string;
    hp: number,
    showHp: () => void;
}

const healCharacter = ( character : Character, amount : number ) => {


    character.hp += amount;
}


const strider : Character = {
    name: 'Luis',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter( strider, 20 );
healCharacter( strider, 10 );
strider.showHp();  





export{};