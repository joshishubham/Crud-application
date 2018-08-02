import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudService } from '../crud.service';
import {Router} from "@angular/router";

import {crud} from '../crud';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CrudService]
})
export class CreateComponent implements OnInit {

  Crud: any = [];
  Data: crud;
  id: number;
  Name: string;
  Email: string;
  Mobile: number;
  Address: string

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
  }
  	
    postData(){

     var data = { id: this.id,	Name: this.Name, Email: this.Email,	Mobile: this.Mobile, Address: this.Address};
      this.crudService.postData(data)
       .subscribe(Data => {
 	       this.Crud.push(Data);
          this.router.navigate(['/list']);
	  },
      err => {
          console.log("Server runner is not working! ")
      });
  }
} 