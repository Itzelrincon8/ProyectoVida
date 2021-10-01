import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//this comment is for routing branch
@Injectable()

export class DataService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal : any){
    this.goals.next(goal);
  }
}
