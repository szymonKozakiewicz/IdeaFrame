import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class UserService 
{



    public getUserName():string
    {
        return localStorage.getItem("userName")??'';
    }


}
