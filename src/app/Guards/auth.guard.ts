// import { Injectable } from '@angular/core'
// import { CanActivate, Router } from '@angular/router'
// import { map } from 'rxjs/operators'
// import { Web3Service } from '../Services/Web3/web3.service'
// import { Observable } from 'rxjs'
// import { Web3Model } from '../Models/web3.model'
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   private web3var: Web3Model
//   constructor(private web3Service: Web3Service, private route: Router) {}
//   async canActivate(): Promise<boolean> {
//     if (typeof this.web3Service.AccountSubscription !== 'undefined') {
//       if (this.web3Service.AccountSubscription.closed) {
//         localStorage.setItem('isLogged', 'false')
//         await this.web3Service.web3login()
//       }
//     } else {
//       localStorage.setItem('isLogged', 'false')
//       await this.web3Service.web3login()
//     }
//     this.web3var = this.web3Service.Web3Details$.value
//     // get game admin address
//     const vendor = await this.web3var.sample.methods
//       .checkUser()
//       .call({ from: this.web3var.account })
//     // check logged user is game admin
//     if (vendor === '2') {
//       return true
//     }
//     this.route.navigateByUrl('/')
//   }
// }
