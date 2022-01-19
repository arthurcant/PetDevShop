type PetType = 'dog';
type PetSex = 'Masculino' | 'Feminino'
type Pet = {
    type:PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name:"Pastor-alemão",
        color:'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
]
   
export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type:PetType): Pet[] => {
        return data.filter(item => item.type === type)
    },
    getFromName: (name: string):Pet[] => {
        return data.filter(item => 
          item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 
        );
    }

}

