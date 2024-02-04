import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
    name:'fam',
    standalone : true
})
export class FamPipe implements PipeTransform{

    transform(value: any):any{
     let currentYear:any = new Date().getFullYear();
     let userBirthYear:any = new Date(value).getFullYear();
     let userFam = currentYear-userBirthYear;
        return userFam;;
    } 
        
    }

