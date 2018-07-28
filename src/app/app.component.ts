import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';

//import service
import { ApiBackEndService } from './api-back-end.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private apiService: ApiBackEndService) {}

  users;

  ngOnInit() {
    this.apiService.getUser().subscribe(data => (this.users = data));
  }
}

/* 

onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address;  
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
*/
