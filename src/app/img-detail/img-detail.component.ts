import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {
	image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.image = this.imageService.getImage(
  		+this.route.snapshot.params['id']
  	)
  }

}
