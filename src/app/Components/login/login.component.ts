import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Web3Service } from 'src/app/Services/Web3/web3.service'

import { Web3Model } from 'src/app/Models/web3.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sample: any
  UserAddress: any

  constructor(private route: Router, private web3service: Web3Service) {}

  ngOnInit() {
    this.web3service.Web3Details$.subscribe((data: Web3Model) => {
      this.UserAddress = data.account
      this.sample = data.sample
    })
  }

  // login = async () => {
  //   try {
  //     await this.web3service.web3login()
  //     this.checkUser()
  //   } catch (error) {
  //     console.log('TCL: LoginComponent -> login -> error', error)
  //   }
  // }
  // checkUser = async () => {
  //   try {
  //     const user = await this.sample.methods.checkUser().call({
  //       from: this.UserAddress
  //     })
  //     if (user === '1') {
  //       this.route.navigateByUrl('/Customer')
  //     }
  //     if (user === '2') {
  //       this.route.navigateByUrl('/Vendor')
  //     } else if (user === '0') {
  //       alert('Invalid User')
  //     }
  //   } catch (error) {
  //     console.log('TCL: LoginComponent -> checkUser -> error', error)
  //   }
  // }
}
