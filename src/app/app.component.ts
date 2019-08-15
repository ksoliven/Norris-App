import { Component } from '@angular/core';
import { HttpService } from'./http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chuck';
  setup = "Give me your best Chuck Norris joke!";
  value = "";
  showValue = false;

  constructor(private _httpService: HttpService) {}

  ngOnInit(){
  this.getNewJoke();
}

toggleValue(){
  this.showValue = !this.showValue;
}

  getNewJoke(){
    let comedian = this._httpService.getJoke();
    comedian.subscribe(data => {
      this.showValue = false;
      this.value = data['value'];
    });
  }
}