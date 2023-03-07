import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) { }

  ngOnInit() {
    // Or subscribe to it here
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previous url: ', previousUrl);
    });
  }

}