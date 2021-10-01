import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//this is a comment to animation issue
@Injectable()

export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal : any){
    this.goals.next(goal);
  }
}
