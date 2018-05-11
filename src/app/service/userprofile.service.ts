import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class UserProfile{

    private httpHeaders : any;
    private peopleData : any;

    constructor(private http : HttpClient){
        this.httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    // public getPeopleData() : Observable<any>
    // {
    //     return this.http.get('assets/people.json')
    //         .map((res)=>{
    //             this.peopleData = res;
    //             console.log(this.peopleData);
    //         })
    //         .catch(error =>{
    //             return Observable.throw(error || "json error")
    //         })

    // }
}
