// У вас будет главный class Person. 
// В нем будут два свойства company, address. 
// Также вы создатие два класса наследника Admin и User.
//  У админа будет возможность добавлять, удалять юзеров из массива и также просматривать массив. 
//  У класса User есть возможность только проссматривать массив.

class Person {
    constructor(company, address){
      this.company = company;
      this.adress = address;
    }
  }
  class Admin extends Person{
    constructor(company, address){
      super(company, address);
      this.users = [];
    }
    addUser(user){
      this.users.push(user);
      console.log(`user added ${user.name}`)
    }
    removeUser(user){
      const index= this.users.indexOf(user);
      this.users.splice(index,1);
      console.log(`user removed ${user.name}`)
    }
    viewUsers(){
      admin.viewUsers()
    }
  }
  class User extends Person{
    constructor(company, address,name){
      super(company, address);
      this.name = name;
    }
  }
  const admin = new Admin (`itstep`, 'Yasamal');
  const user1 = new User('itstep',`Yasamal`,`John`);
  const user2 = new User('itstep',`Yasamal`,`Bob`);
  
  admin.addUser(user1);
  admin.addUser(user2);
  admin.removeUser(user2);
  // admin.viewUsers(user1);