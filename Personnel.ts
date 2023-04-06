import Personnelmanager from "./Personnelmanager";
export enum Position {
    Dev=1,
    HR,
    Tester,
    CEO


}
class Personnel {
     private surname:string
     private name:string
     private birthday:Date
     private address:string
     private position:Position
     private ID:string

    constructor(surname: string, name: string, birthday: Date, address: string, position: Position,ID:string) {
        this.surname = surname;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
        this.ID=ID
    }


    getSurname(): string {
        return this.surname;
    }

    setSurname(surname: string) {
        this.surname = surname;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getBirthday(): Date {
        return this.birthday;
    }

    setBirthday(date: Date) {
        this.birthday = date;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string) {
        this.address = address;
    }

    getPosition(): Position {
        return this.position;
    }

    setPosition(position: Position) {
        this.position = position;
    }
    getID(){
        return  this.ID
    }
    setID(ID:string){
    this.ID=ID
    }
}
export default Personnel