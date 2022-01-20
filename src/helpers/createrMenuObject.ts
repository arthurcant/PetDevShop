type petTye = '' | 'all' | 'dog' | 'cat' | 'fish'
type pets = {
    all:boolean,
    dog:boolean,
    cat:boolean,
    fish:boolean,
}

export function createMenuObject(active: petTye) {

    const returnType = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(active !== '') {
        returnType[active] = true;
    }

    return returnType;
}


