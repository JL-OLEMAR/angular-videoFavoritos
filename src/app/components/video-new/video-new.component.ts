import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-new',
  templateUrl: './video-new.component.html',
  styleUrls: ['./video-new.component.css']
})
export class VideoNewComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title = 'Guardar un nuevo video favorito.';
  }

  ngOnInit(): void {
  }

}
