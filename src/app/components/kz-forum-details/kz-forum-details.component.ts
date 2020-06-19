import { KzDataService } from './../../services/kz-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-kz-forum-details',
  templateUrl: './kz-forum-details.component.html',
  styleUrls: ['./kz-forum-details.component.css']
})
export class KzForumDetailsComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;


  constructor(private dataService: KzDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string;
    this.route.paramMap
         .subscribe(params => {
           id = params.get('id');
      });

    this.dataService.getById(id).subscribe(res => {
      this.image = res['url'];
      this.text = res['content'];
    });
  }
}
