import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    // private keyUrlApiService = 'cfdbc2e52c3a08e38525921a6473033c7b10d6dc';
    private keys = {
        token: 'DE7D84AABE77A8522D80056DD94857C2052A47C7CCE43BB998F770A87641E673',
        emailUser: '1e06089750128c1322d24f9135c032c4c5df7643991a576cb0f1cdaf959ff0dd'
    };

    // private keyUser = 'a4be4bd37d65f99ec2609e2233bb92015fa600ee';
    // private keyConfig = 'f8bd4hd25d65h21uec2458e2263bb92014fa644ee';
    // private keyMenuAtivo = '5ca91159f316e94efebe55cb84399641e3d44266';
    // private keyUrls = '3b44429d7dd6eafcb15cd6994e2e7a17fc2f9b5b';
    // private keyDataTemp = '7e4410550fb53f4678911b22bde6f7408dfcadb2';
    // private keyPreviousRoute = 'ba7f183971398943fcf375b7615abb1374293bb5';
    // private keyEmailUser = 'ab82900f1faa2df10ca67a8f1869688a6c1171d1';
    // private keyClienteUser = 'cd37ab2df26312b36ca77340e4bb935f1a6d61ca';
    // private keyAssinatura = '0d7a88192506298791fc60e02dabe71f36a2d22a';
    // private keyUltimosMovimentos = '197e1cefa1f9d42e54319d58ad309e77fda988a3';


    public cleanStorage(): void {
        for (const propriedade in this.keys) {
            if (this.keys.hasOwnProperty(propriedade) && propriedade != 'emailUser') {
                localStorage.removeItem(this.keys[propriedade]);
            }
        }
    }

    public getKey(key: string): string {
        return localStorage.getItem(this.keys[key]);
    }

    public setKey(key: string, value: string): void {
        localStorage.setItem(this.keys[key], value);
    }


}
