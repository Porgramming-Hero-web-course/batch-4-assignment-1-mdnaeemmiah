{


    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);  //The every method checks if every key in keys exists in obj by using the in operator. If all keys exist, it returns true; otherwise, it returns false
    }


    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));






}