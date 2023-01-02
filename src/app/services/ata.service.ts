import { Injectable } from '@angular/core';
import {AssemblyService} from "./assembly.service";
import {DialogData} from "../pages/assembly/ata/ata.component";

@Injectable({
  providedIn: 'root'
})
export class AtaService {
  step = 0
  ata : Array<any> = []
  length = 0
  loading = false
  data :any

  title = 'Titulo em branco'
  loadAta(id : any){
    this.assemblyService.getAssembly(id).then(
      (item: any) => {
        item['ata'].map((item:any)=>{
          item.date= item.date.replace(/-/g, '/')
        })
        this.ata = item['ata']
        console.log(this.ata)

        this.length = item['ata'].length
      })
  }
  constructor(private assemblyService : AssemblyService) { }
}
