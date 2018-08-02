import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {crud} from '../crud';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Crud: any = [];
	Data: crud;
  id: number;
	Name: string;
	Email: string;
	Mobile: number;
	Address: string

  constructor(private crudService: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCrudDetail(this.route. snapshot.params['id']);
  }

  getCrudDetail(id){
    this.crudService.getCrudDetail(id)
      .subscribe(Data =>{
        this.Crud= Data
      })
  }

  deleteData(id){
    if(confirm("Are you sure want to delete") ==true){
    this.crudService.deleteData(id)
     .subscribe( res =>{
      this.router.navigate(['/list']);
   });
  }
 } 
}
