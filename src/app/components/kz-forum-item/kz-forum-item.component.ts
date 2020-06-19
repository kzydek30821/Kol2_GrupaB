import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kz-forum-item',
  templateUrl: './kz-forum-item.component.html',
  styleUrls: ['./kz-forum-item.component.css']
})
export class KzForumItemComponent implements OnInit {

  @Input() id: number;
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
