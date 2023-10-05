import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiBaseUrl = 'http://localhost:3000/user';

  @Input() user: User | undefined;

  constructor(private http: HttpClient) {

    console.log("Ich wurde initializiert.");
    this.getUser().subscribe({ next: (user) => (this.user = user) });
  }

  login(password: string | undefined): Promise<boolean> {
    console.log(this.user);
    return new Promise<boolean>((resolve, reject) => {
      // Assuming your JSON Server API returns an object with a 'password' field
      this.http.get<any>(this.apiBaseUrl).subscribe({
        next: (response) => {
          const passwordFromDB = response.password;

          // Check if the password matches your criteria
          if (passwordFromDB === password) {
            if (this.user !== undefined) {
              this.user.isLoggedIn = 1;
              this.setUser(this.user);
            }



            resolve(true); // Resolve the promise when logged in successfully
          } else {
            resolve(false); // Resolve with false if the password doesn't match
          }
        },
        error: (error) => {
          console.error("Error occurred:", error);
          reject(error); // Reject the promise in case of an error
        }
      });
    });
  }

  logout() {
    if (this.user !== undefined) {
      this.user.isLoggedIn = 0;
      this.setUser(this.user);
    }


  }

  isLoggedIn(): boolean {
    console.log("da");

    if (this.user !== undefined) {
      console.log(this.user.isLoggedIn);
      return this.user.isLoggedIn == 1;
    } else {
      return false;
    }

  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiBaseUrl);
  }

  setUser(user: User) {
    return this.http.put<User>(this.apiBaseUrl, user).subscribe({
      next: (response) => (console.log("usersaved"))
    });

  }

}
