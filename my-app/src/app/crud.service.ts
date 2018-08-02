import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';

import {crud} from './crud';

//headers
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )};

@Injectable()

export class CrudService {

  constructor(private http: HttpClient) { }

/*******************************************
* 	       Retrieve data database 		     *
*******************************************/

  DataUrl= 'http://localhost:7890/';

  //Retrieve getData

  	getData(){
  		return this.http.get(this.DataUrl)
    }
//Retrieve detailsdata
    
    getCrudDetail(id){
      return this.http.get(this.DataUrl+ id)
    }
    
//Retrieve postData

  	postData(crud){
	   	return this.http.post(this.DataUrl, crud, httpOptions)
  	}

//Retrieve putData
    
    putData(id, crud){
      return this.http.put(this.DataUrl+ id, crud, httpOptions)
    }

//Retrieve deleteData

  	deleteData(id){
  		return this.http.delete(this.DataUrl +id)
  	}
}