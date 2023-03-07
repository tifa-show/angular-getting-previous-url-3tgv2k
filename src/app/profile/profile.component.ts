import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) { }

  ngOnInit() {
    // Or subscribe to it here
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previous url: ', previousUrl);
    });
  }

}