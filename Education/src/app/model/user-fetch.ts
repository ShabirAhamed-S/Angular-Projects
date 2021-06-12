export class UserFetch {
  id: string ;
  username: string ;
  name: string ;
  email: string ;
  phone: string ;
  website: string ;

  constructor(id: string,
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    salary: string) {
    this.id = id
    this.username = firstName
    this.name = lastName
    this.email = email
    this.phone = mobile
    this.website = salary
  }

}