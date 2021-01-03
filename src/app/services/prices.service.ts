import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor( private _http: HttpClient ) { }

  public addProductFromRemote(products: Products): Observable<any> {
    return this._http.post<any>('http://localhost:8080/addprice', products);
  }

  public getProductsFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/allprices');
  }

  public getCategoriesFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/getCategories');
  }

  public findAveragePriceFromRemote(date: Date, category: String): Observable<any> {
    return this._http.get<any>('http://localhost:8080/' + date + '/' + category);
  }

}
