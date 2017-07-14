import { Component } from '@angular/core';
import { PuzzlepieceService } from '../puzzlepiece.service';
import { Puzzlepiece } from '../puzzlepiece.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PuzzlepieceService]
})

export class AdminComponent {

  constructor(private puzzlepieceService: PuzzlepieceService) { }

  // ngOnInit() {
  // }

  submitForm(name: string, age: number, description: string, likes: string, dislikes: string, url: string) {
    var newPuzzlepiece: Puzzlepiece = new Puzzlepiece(name, age, description, likes, dislikes);
    this.puzzlepieceService.addPuzzlepiece(newPuzzlepiece);
  }

}
