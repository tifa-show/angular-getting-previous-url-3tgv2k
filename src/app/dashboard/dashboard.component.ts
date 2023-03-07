import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) { }

  ngOnInit() {
    // Or subscribe to it here
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previous url: ', previousUrl);
    });
  }

}