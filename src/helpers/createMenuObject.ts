type MenuOptions = '' | 'all' | 'dog';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog:false,
    }    

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}