import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private http: HttpClient
    ) {

/*
      const headers = {  'Access-Control-Allow-Origin': '*',
                         'Access-Control-Allow-Methods': 'POST',
                         'Access-Control-Allow-Headers': 'Origin, Methods, Content-Type' }

    this.activateRoute.params.subscribe( params => {console.log(params); } );
    this.http.post<any>('localhost:3000/api/login', '"username": "ismael", "password": "ismael123"',{ headers }).subscribe(response => console.log(response));
    console.log('posting')
    */
  }
  ngOnInit(): void {
  }

  loginparams(){
    alert('se ha cliqueado el login');
    console.log('se ha cliqueado el login');
  }

}
