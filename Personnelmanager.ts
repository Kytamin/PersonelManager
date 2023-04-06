import Personnel, {Position} from "./Personnel";
import personnel from "./Personnel";

class Personnelmanager {
    static personels:Personnel[]=[]
    constructor() {
    }
   static displayList(){
        return Personnelmanager.personels
    }
    static add(personel:Personnel){
  Personnelmanager.personels.push(personel)
    }
   static find(ID:string){
        let i=-1
        Personnelmanager.personels.forEach((personnel,index)=>{
              if(personnel.getID()===ID){
                  i=index
              }
        })
      return i
    }
   static displayPersonel(ID:string){
        if(Personnelmanager.find(ID)!==-1){
            return Personnelmanager.personels[Personnelmanager.find(ID)]
        }
    }
    static delete(ID:string){
        if (Personnelmanager.find(ID)!==-1){
            Personnelmanager.personels.splice(Personnelmanager.find(ID),1)
        }

    }
    static fix(ID:string,surname:string,name:string,birthday:Date,address:string,position:Position){
        if(Personnelmanager.find(ID)!==-1){
            Personnelmanager.personels[Personnelmanager.find(ID)].setSurname(surname)
            Personnelmanager.personels[Personnelmanager.find(ID)].setName(name)
            Personnelmanager.personels[Personnelmanager.find(ID)].setBirthday(birthday)
            Personnelmanager.personels[Personnelmanager.find(ID)].setAddress(address)
            Personnelmanager.personels[Personnelmanager.find(ID)].setPosition(position)
        }

    }



}
    export default Personnelmanager