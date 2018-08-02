import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CrudService } from '../crud.service';
import { Pipe, PipeTransform } from '@angular/core';

import {crud} from '../crud';	

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls:['./list.component.css'],
  providers: [CrudService]
})

export class ListComponent implements OnInit {
  
  Crud: any = [];
	Data: crud;
  id: number;
	Name: string;
	Email: string;
	Mobile: number;
	Address: string

  constructor(private crudService: CrudService) { }
  
// Delete request
  deleteData(id){
    if(confirm("Are you sure want to delete") ==true){
   this.crudService.deleteData(id)
    .subscribe( res =>{
      location.reload()
  });
 }
}

ngOnInit() {
// Get request
this.crudService.getData()
 .subscribe(Data => {
 	 //console.log(Crud);
 	  this.Crud = Data;
 },
 	err => {
 		console.log("Server runner is not working! ");
 	 });
  }
}