import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
	title = 'Recent photos';

	@Input() filterBy ?: string = 'all';

	visibleImages: any[] = [];

  constructor(private imageService: ImageService) { 
  	this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
  	this.visibleImages = this.imageService.getImages();
  }
}
