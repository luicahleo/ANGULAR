
let skills: string[] = ['bash', 'conter' ];



interface Character{
    name: string;
    hp: number;

    skills: string[];
    city?: string;
}


const strider : Character = {
    name: 'Luis',
    hp: 100,
    skills: ['bash', 'conter' ],            
};

console.log(strider);


strider.city = 'Costa Rica';

export{};