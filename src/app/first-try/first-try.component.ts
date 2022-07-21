import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-try',
  templateUrl: './first-try.component.html',
  styleUrls: ['./first-try.component.scss']
})
export class FirstTryComponent implements OnInit {
  loremTest:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus, repudiandae porro quae recusandae alias veniam tempora aspernatur aut.";

  constructor() { }

  ngOnInit(): void {
  }

}
