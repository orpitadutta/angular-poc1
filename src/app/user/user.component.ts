import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  show = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userList = this.userService.getUsers();
  }

  toggle(el) {
    this.show = !this.show;
    if(this.show){
      el.target.classList.remove("btn-danger");
      el.target.classList.add("btn-primary");
    }
    else{
      el.target.classList.remove("btn-primary");
      el.target.classList.add("btn-danger");
    }
  }
}
