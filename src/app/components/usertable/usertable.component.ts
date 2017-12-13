import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {User} from '../../models/user.model';
import { MatTableDataSource } from '@angular/material';
import {DataSyncService} from '../../services/data-sync.service';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

   ELEMENT_DATA: Element[];
   dataSource; 
  constructor(dataSync:DataSyncService)
  {
      
    this.ELEMENT_DATA=dataSync.pushData();
     this.dataSource= new MatTableDataSource<Element>(this.ELEMENT_DATA);
     
  }
  
  
  displayedColumns=['position','name','weight','symbol'];


  ngOnInit() {
  }

}
export interface Element{
  name:string,
  position:number;
  weight:number;
  symbol:string;

}

