import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  // Busqueda por Id
  searchCountryByAlphaCode( code: string): Observable<Country | null >{
    const url = (`${ this.apiUrl}/alpha/${ code }`);

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  //Busqueda por capital
  searhCapital( term: string ): Observable<Country[]>{
    const url = (`${ this.apiUrl}/capital/${ term }`);

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      );


  }
    // Search for County
  searchCountry( term: string ): Observable<Country[]>{
      const url = (`${ this.apiUrl}/name/${ term }`);
      return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      );
  }
  // Search for Region
  searchRegion( region: string ): Observable<Country[]>{

    const url = (`${ this.apiUrl}/region/${ region }`);
      return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      );

  }

}

