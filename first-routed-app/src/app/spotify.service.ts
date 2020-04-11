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
        'Bearer BQAXW_vzamiHb7ZiSP_Nc_7XdKGKkisZU87EKbqUmQ1TzxGfIS58ZYwp-MDYxE_MD4b9IxR5Z7w6XfzaJyQ_bLqr7_QV9rVPPL7RFqK9PBk_ZHHY68AE6-vD1S-UwRRNTmO-njkHEFVg4R6FEDM'
    });
 getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAXW_vzamiHb7ZiSP_Nc_7XdKGKkisZU87EKbqUmQ1TzxGfIS58ZYwp-MDYxE_MD4b9IxR5Z7w6XfzaJyQ_bLqr7_QV9rVPPL7RFqK9PBk_ZHHY68AE6-vD1S-UwRRNTmO-njkHEFVg4R6FEDM'
    });
    
    return this.http.get(url, { headers });
  }
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
