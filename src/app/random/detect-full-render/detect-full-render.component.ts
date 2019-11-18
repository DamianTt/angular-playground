import { Component, OnInit } from '@angular/core';
import { DetectFullRenderService } from 'src/app/random/detect-full-render/detect-full-render.service';

@Component({
  selector: 'app-detect-full-render',
  templateUrl: './detect-full-render.component.html',
  styleUrls: ['./detect-full-render.component.scss']
})
export class DetectFullRenderComponent implements OnInit {

  constructor(private detectFullRenderService: DetectFullRenderService) { }

  ngOnInit() {
    console.log('start timeout');
    setTimeout(() => {
      console.log("end timeout");
    }, 2000);
  }

}
