import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any):Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(tap((newHero: Hero) => this.log(`added hero with id=${newHero.id}`)), catchError(this.handleError<Hero>("addHero")));
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  };

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(tap(_ => this.log(`updated hero id=${hero.id}`) ), catchError(this.handleError<any>('updateHero')));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    const url = `${this.heroesUrl}/?name=${term}`;

    return this.http.get<Hero[]>(url).pipe(tap(x => x.length ? this.log(`found heros matching "${term}"`) : this.log(`no heroes matching"${term}"`)), catchError(this.handleError<Hero[]>("searchHeroes", [])));
  }

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};


  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;


    return this.http.get<Hero>(url).pipe(tap(_ => this.log(`fetched hero id=${id}`)), catchError(this.handleError<Hero>(`getHero id=${id}`)));
  }
}
