import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id == id);
	}
}

const IMAGES = [
	{
		'id':1, 
		'category': 'boats', 
		'caption': 'A sunset view with a boat', 
		'url': 'assets/img/boat_01.jpeg'
	},
	{
		'id':2, 
		'category': 'boats', 
		'caption': 'A nice motor boat', 
		'url': 'assets/img/boat_02.jpeg'
	},
	{
		'id':3, 
		'category': 'boats', 
		'caption': 'Paper boat', 
		'url': 'assets/img/boat_03.jpg'
	},
	{
		'id':4, 
		'category': 'boats', 
		'caption': 'A big old Royal vessel', 
		'url': 'assets/img/boat_04.jpeg'
	},
	{
		'id':5, 
		'category': 'cars', 
		'caption': 'Yellow car', 
		'url': 'assets/img/car_01.jpeg'
	},
	{
		'id':6, 
		'category': 'cars', 
		'caption': 'A red car', 
		'url': 'assets/img/car_02.jpeg'
	},
	{
		'id':7, 
		'category': 'cars', 
		'caption': 'A really huge parking lot', 
		'url': 'assets/img/car_03.jpeg'
	},
	{
		'id':8, 
		'category': 'cars', 
		'caption': 'That nice muscle car', 
		'url': 'assets/img/car_04.jpeg'
	},
	{
		'id':9, 
		'category': 'books', 
		'caption': 'Collection of books', 
		'url': 'assets/img/book_01.jpeg'
	},
	{
		'id':10, 
		'category': 'books', 
		'caption': 'Books on top of books', 'url': 'assets/img/book_02.jpeg'},
	{
		'id':11, 
		'category': 'books', 
		'caption': 'Books hall', 
		'url': 'assets/img/book_03.jpeg'
	},
	{
		'id':12, 
		'category': 'books', 
		'caption': 'Stacks of books', 
		'url': 'assets/img/book_04.jpeg'
	},
	{
		'id':13, 
		'category': 'houses', 
		'caption': 'Tech house', 
		'url': 'assets/img/house_01.jpeg'
	},
	{
		'id':14, 
		'category': 'houses', 
		'caption': 'Sunset house', 
		'url': 'assets/img/house_02.jpeg'
	},
	{
		'id':15, 
		'category': 'houses', 
		'caption': 'One big house', 
		'url': 'assets/img/house_03.jpeg'
	},
	{
		'id':16, 
		'category': 'houses', 
		'caption': 'Connected', 
		'url': 'assets/img/house_04.jpeg'
	},
	{
		'id':17, 
		'category': 'houses', 
		'caption': 'View houses from the top', 
		'url': 'assets/img/house_05.jpeg'
	}
];