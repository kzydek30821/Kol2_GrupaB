import { KzDataService } from './../../services/kz-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kz-forum',
  templateUrl: './kz-forum.component.html',
  styleUrls: ['./kz-forum.component.css']
})
export class KzForumComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  public items$: any;

  constructor(private service: KzDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
     this.service.getAll().subscribe(response => {
       this.items$ = response;
   });
  }
}
