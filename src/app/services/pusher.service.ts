import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  BACKEND_URL = `${env.backend_ws}://${env.backend_host}:${env.backend_port}`;
  WS_URL: string = `${this.BACKEND_URL}/ws/notifications`;

  constructor() {}

  getPusher(user_id: number) {
    return webSocket(`${this.WS_URL}/${user_id}/`);
  }
}
