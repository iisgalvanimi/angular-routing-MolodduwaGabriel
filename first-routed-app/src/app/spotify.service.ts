import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBEPnFxmyX8qD_M8goJ3F6a5xicuxVy9hpVq83rV-33CcQ5JItburVD-ZMvOBJS_vG14_MhBkyBd9Vbsn0_vLb7jvPyFrohonJBhJjhq6it7JoTEcDeeALTfi2yPAHhLE_zh7Z0P8yyyFaqLZA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
