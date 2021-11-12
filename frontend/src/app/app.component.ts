import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from './services/user';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  constructor(private userService:UserService){}

  ngOnInit(){
    this.getUSers()
  }
  getUSers(){
    this.userService.getUsers().subscribe((res)=>{
      this.userService.users = res as User[];
    })
  }

  postUser(user:User){
    this.userService.postUsers(user).subscribe((res)=>{
      this.userService.selectedUser = new User()
    })
  }
  putUser(user:User){
    this.userService.putUsers(user).subscribe((res)=>{
      this.getUSers()
      this.userService.selectedUser = new User()
    })
  }
  deleteUser(_id:string){
    this.userService.deleteUser(_id).subscribe((res)=>{
      this.getUSers()
      this.userService.selectedUser = new User()
    })
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value );
    this.postUser(form.value);
}
}
