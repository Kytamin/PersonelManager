import Personnelmanager from "./Personnelmanager";
import Personnel, {Position} from "./Personnel";
import personnelmanager from "./Personnelmanager";

let person1= new Personnel("Nguyễn","Kỳ",new Date("23-12-1997"),"HQV",1,"S001")
let person2= new Personnel("Nguyễn","KLinh",new Date("7-10-2001"),"HM",2,"S002")
let person3= new Personnel("Nguyễn","HG",new Date("14-3-2001"),"CG",3,"S003")


Personnelmanager.add(person1)
Personnelmanager.add(person2)
Personnelmanager.add(person3)
console.log(Personnelmanager.find("S002"))
console.table(Personnelmanager.displayList())
console.table(Personnelmanager.displayPersonel("S001"))
Personnelmanager.delete("S003")
console.table(personnelmanager.displayList())
Personnelmanager.fix("S001","Hoàng","Kỳ",new Date("1-1-1998"),"CG",4)
console.log(Personnelmanager.displayPersonel("S001"))
