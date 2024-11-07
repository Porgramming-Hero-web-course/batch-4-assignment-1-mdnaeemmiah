{

interface Profile {
    name:string;
    age:number;
    email:string
}

// Use Partial when creating functions that modify only specific properties of an object.
function updateProfile(obj: Profile, updates: Partial<Profile>): Profile {
    return { ...obj, ...updates };
  }

const myProfile : Profile = {
    name: "naeem",
    age: 25,
    email: "naeem@gmail.com",
  };


  const updatedProfile = updateProfile(myProfile , { age: 258 });

  console.log(updatedProfile);


}