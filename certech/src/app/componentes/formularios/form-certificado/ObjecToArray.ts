import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'ObjecToArray'
})
export class ObjecToArray implements PipeTransform{
    transform(Object:any =[]): any{
        return Object.values(Object)
    }
        
}
