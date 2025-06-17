export class User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
        lat: string;
        lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    
    constructor(data: any ) {
        this.id = data.id ;
        this.name = data.name ;
        this.username = data.username ;
        this.email = data.email;
        this.address = {
            street: data.address?.street ,
            suite: data.address?.suite ,
            city: data.address?.city ,
            zipcode: data.address?.zipcode ,
            geo: {
                lat: data.address?.geo?.lat ,
                lng: data.address?.geo?.lng 
            }
        };
        this.phone = data.phone ;
        this.website = data.website ;
        this.company = {
            name: data.company?.name ,
            catchPhrase: data.company?.catchPhrase ,
            bs: data.company?.bs 
        };
    }
        
}