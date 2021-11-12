import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vocab} from 'src/app/services/vocab';
import { VocabService } from 'src/app/services/vocab.service';
@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.component.html',
  styleUrls: ['./ch1.component.css']
})
export class Ch1Component implements OnInit {

  vocabList: any;
  constructor(private http:HttpClient, private vocabService: VocabService) {

   }

 

  ngOnInit(): void {
    this.getVocab();
  }

  getVocab(): void{
   this.vocabService.getVocab().subscribe((data) => {
      this.vocabList = data;
    })
    
 
  }

}
