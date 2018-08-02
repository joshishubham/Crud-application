import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import {crud} from '../crud';	

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [CrudService]
})
export class UpdateComponent implements OnInit {

 	Crud: any = [];
	Data: crud;
    id: string;
	Name: string;
	Email: string;
	Mobile: number;
	Address: string;

  constructor(private crudService: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	this.getCrudDetail(this.route. snapshot.params['id']);
}
	getCrudDetail(id){
	 this.crudService.getCrudDetail(id)
	 .subscribe(Data => {
		this.Crud = Data;
	 });
 }
  	putData(id){
  	 var data= { Name: this.Name, Email: this.Email, Mobile: this.Mobile, Address: this.Address};
  	  this.crudService.putData(id, data)
  	   .subscribe(res => {
		 this.router.navigate(['/list']);
  	  });
   }
}