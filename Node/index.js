console.clear()

class Menu {
    constructor() {
        console.log("messge")
        this.name = "ravi"
        this._age = 23; // private variable convention
    }
    Menu = () => {
        console.log("menu")
    }
}

class subMenu extends Menu {
    Menu = () => {
        console.log("sub menu")
    }
}


let menObj = new subMenu()
menObj._age = 9
console.log(menObj._age)
menObj.Menu()