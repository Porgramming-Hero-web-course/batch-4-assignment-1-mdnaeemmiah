
Union Types:  

1.In programming, a union type is a type that can hold multiple different types of values. It is common in languages that support more advanced type systems, such as TypeScript.
2.In TypeScript, union types allow a variable to hold values of more than one type. You define a union type using the pipe (|) symbol.


Example:
{
    let value: string | number;

     value = "Hello";
     value = 42; 
     value = true;  // Error

    function printId(id: string | number) {
      console.log(`ID: ${id}`);
   }

     printId(123);       
     printId("ABC");    
     printId(true);  // Error
     
}



Intersection Types:

1.Intersection types are the opposite of union types. They allow you to combine multiple types into a single one, meaning a value of that type must satisfy all of the combined types at once.

2.In TypeScript, intersection types are created using the & (ampersand) operator. A variable of an intersection type must conform to all the types involved in the intersection.

Example:
{
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
  name: "Naeem",
  age: 22,
  employeeId: 1234,
  department: "Developer"
};


}

