import { Button } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";

let mystr:string;
mystr="cdwqvdvwdvwdvwvw";


// enum list {

// }

// interface User {
//     name: string;
//     id: number;
//   }
  
//   class UserAccount {
//     name: string;
//     id: number;
  
//     constructor(name: string, id: number) {
//       this.name = name;
//       this.id = id;
//     }
//   }
  
//   const user: User = new UserAccount("Murphy", 1);

//   function useUser(user: User):string {
    
//       let newuser = new UserAccount("ergin", 5);
//       newuser = user;
//       return newuser.name;
//   }
// type R = "rear";
// type Gear = 1 | 2 | 3 | 4 | 5 | R;

enum Gear {
    one= 1,
    two, 
    three,
    four, five, 
    rear= "r",

}

 export const Page2:React.FC =()=> {

    function condit(){
        let myobj = 4;
        if(typeof myobj==="string"){
            return "string";
        }
        else {
            return "not string";
        }
    }
function toLower(input:string):string {
    return input.toLowerCase();
}

function printScreen( a:string) {
    alert(a);
}


const user = {
    name: "ergin",
    id: 2177,
}

interface User {
    name: string;
    id: number;
}

class UserInfo {
    name: string;
    id: number;

    constructor(name:string, id:number) {
        this.name=name;
        this.id=id;
    }
}

interface First {
    name: string;
    age:number;
    isHere:boolean;
    year: number;
}

interface Second extends First {
    surname: string;
    isDone: boolean;

}
class FirstSec {
    isDone: boolean;
    name: string;
    surname:string;
    age:number;
    isHere:boolean;
    year: number;

    constructor(isDone: boolean, name:string, age:number, isHere: boolean, year:number, surname:string){
        this.isDone=isDone;
        this.name= name;
        this.age=age;
        this.surname=surname;
    this.isHere=isHere;
    this.year=year;
    }
}

const derf:Second = new FirstSec(true, "ergin", 21, true, 2019556021, "Cetin");

     const user1:User = new UserInfo("ergin", 2144);

     return (
         <Layout>
             <Content>
                 
                 {mystr}
                 <br/>
                 {Gear.rear}
                 {condit()} <br/>
                 {toLower("FBFBDSWWBFBFDB")} <br/>
                 <Button style={{color: "red"}} onClick={
                     ()=>printScreen("ergin")}></Button>
                 <br/>
                 {user1.id}
                 <br/>
                 {user.name}
                 <br/>
                 {derf.surname}
                 
                 {/* {user.id} - {user.name}
                 {useUser(user)} */}
             </Content>

         </Layout> 
     )



}