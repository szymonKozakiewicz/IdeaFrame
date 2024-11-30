import { Component, OnInit } from '@angular/core';
import { OperationStatus } from 'src/app/core/enum/operation.status';
import { RegisterService } from 'src/app/core/services/register.service';


@Component({
  selector: 'register-operation-result',
  templateUrl: './register-operation-result.component.html',
  styleUrl: './register-operation-result.component.css'
})
export class RegisterOperationResultComponent implements OnInit {
    operationDescription:string="";
    buttonText:string="";
    buttonLink:string="";
    operationStatus:OperationStatus=OperationStatus.IN_PROGRESS;

    constructor(private registerService:RegisterService)
    {

    }
  ngOnInit(): void {
    this.registerService.registerState$
    .subscribe({
      next:this.showSuccessfulResult.bind(this),
      error:this.showFailerResult.bind(this)});
  }

  

  showFailerResult(status:any) {
    this.operationDescription = "Failed to create new user";
    this.buttonLink = "/register";
    this.buttonText = "Try again";
    this.operationStatus = OperationStatus.FAILURE;
  }

  private showSuccessfulResult(status:any) {
    this.operationDescription = "New user created";
    this.buttonLink = "/login";
    this.buttonText = "Go to login";
    this.operationStatus = OperationStatus.SUCCESS;
  }
}
