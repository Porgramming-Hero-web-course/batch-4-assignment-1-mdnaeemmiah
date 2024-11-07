{

type Person={
    name:string;
    age:number
}
      

 function getProperty<T,K extends keyof T>(nam:T,key:K):T[K]{
    return nam[key]
 }

const person:Person={
    name:'naeem',
    age:22
}


console.log(getProperty(person, 'name'));



}