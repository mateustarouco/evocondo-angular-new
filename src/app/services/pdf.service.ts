import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }


  downloadPDF(data : any) {
    const fontTitle = 11
    const fontsubtitle = 10
    const font = 9
    const left = 10

    let right = 10

    const top = 20


    const doc = new jsPDF('p', 'mm', 'a4')

    doc.setFontSize(fontTitle)
    doc.setTextColor('#18369a')
    // @ts-ignore
    doc.setFont(undefined, 'bold').text(data.header, 105, top, {
      maxWidth: 115,
      align: 'center'
    });

    doc.setFontSize(fontTitle)
    doc.setTextColor('#000000')
    // @ts-ignore
    doc.setFont(undefined, 'normal').text(data.conclusion, left, top, {
      maxWidth: 190,
      align: 'justify'
    });

    return doc.save('a4.pdf');
  }



  base64Profile = 'https://image.flaticon.com/icons/png/512/61/61205.png';

  downloadPdf(userMPU: any, author: any, address:any) {
    const fontTitle = 18
    const fontsubtitle = 11
    const font = 11
    const left = 10
    let right = 10
    const top = 20

    const data = []
    data.push(userMPU)

    const doc = new jsPDF('l', 'mm', 'a4')
    for (let i = 0; i < (data?.length); i++) {
      const fontTitle = 18
      const fontsubtitle = 11
      const font = 11
      const left = 25
      let right = 25
      const top = 20

      /* Primeiro array com o Usuario*/
      if (i < 1) {

        doc.setFontSize(17)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Endereço da Ocorrência: ', 20, top + 140).setFont(undefined, 'normal');

        doc.setFontSize(17)
        doc.text(address, left + 70, top + 140)

        doc.setFontSize(fontTitle)
        // @ts-ignore

        // @ts-ignore
        doc.setFont(undefined, 'bold').text('VÍTIMA', left + 48, top).setFont(undefined, 'normal');

        const img = data[i]?.url_image ? `https://cors-anyware.herokuapp.com/${data[i]?.url_image}` + '?r=' + Math.floor(Math.random() * 100000) : null;
        doc.addImage(img ? img.toString() : this.base64Profile, 'JPEG', left, top + 3, 40, 40)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Nome: ', left + 45, top + 7).setFont(undefined, 'normal')

        doc.setFontSize(font)
        doc.text((data[i]?.name ? data[i].name : ''), left + 45 + 14, top + 7)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Telefone: ', left + 45, top + 12).setFont(undefined, 'normal')

        doc.setFontSize(font)
        doc.text((data[i].phone ? data[i]?.phone.slice(0,5) + ' ' + data[i]?.phone.slice(5,10) + '-'+ data[i]?.phone.slice(10,14)  : ''), left + 45 + 18, top + 12)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('RG: ', left + 45, top + 17).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.rg ? data[i].rg : ''), left + 45 + 8, top + 17)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('CPF: ', left + 45, top + 22).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.cpf ? data[i].cpf : ''), left + 45 + 10, top + 22)

        doc.setFontSize(fontsubtitle)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Endereço ', left, top + 53).setFont(undefined, 'normal');

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Bairro: ', left, top + 59).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.district_name ? data[i].district_name : ''), left + 14, top + 59)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Complemento: ', left, top + 64).setFont(undefined, 'normal');

        doc.setFontSize(font)
        // @ts-ignore
        doc.text((data[i]?.complement ? data[i].complement : ''), left + 28, top + 64)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Rua: ', left, top + 69).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.street ? data[i].street : ''), left + 9, top + 69)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Número: ', left, top + 74).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.number ? data[i].number : ''), left + 18, top + 74)

        doc.setFontSize(fontsubtitle)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Observações: ', right, top + 82).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i]?.obs ? data[i].obs.replace(/(\r\n|\n|\r)/gm, ' - ') : ''), right, top + 88, {
          maxWidth: 120,
        })

      }

      if (i >= 1) {
        if (i % 2 !== 0) {
          right = 153
        }
        doc.setFontSize(fontTitle)
        doc.setFont('', 'bold').text('SUSPEITO ' + i, right + 44, top).setFont('', 'normal');

        const suspects = data[i].suspect?.url_image ? `https://cors-anyware.herokuapp.com/${data[i].suspect?.url_image}` + '?r=' + Math.floor(Math.random() * 100000) : null;

        doc.addImage(suspects ? suspects.toString() : this.base64Profile, 'JPEG', right, top + 3, 40, 40)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Nome: ', right + 45, top + 7).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.name ? data[i].suspect.name : ''), right + 45 + 14, top + 7)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Telefone: ', right + 45, top + 12).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.phone ? data[i].suspect.phone.slice(0,5) + ' ' + data[i]?.suspect.phone.slice(5,10) + '-'+ data[i]?.suspect.phone.slice(10,14)  : ''), right + 45 + 18, top + 12)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('RG: ', right + 45, top + 17).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.rg ? data[i].suspect.rg : ''), right + 45 + 8, top + 17)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('CPF: ', right + 45, top + 22).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.cpf ? data[i].suspect.cpf : ''), right + 45 + 10, top + 22)

        doc.setFontSize(fontsubtitle)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Endereço ', right, top + 53).setFont(undefined, 'normal');

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Bairro: ', right, top + 59).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.district ? data[i].suspect.district : ''), right + 14, top + 59);

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Complemento: ', right, top + 64).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.suspect_address_complement ? data[i].suspect.suspect_address_complement : ''), right + 28, top + 64)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Rua: ', right, top + 69).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.street ? data[i].suspect.street : ''), right + 10, top + 69)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Número: ', right, top + 74).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.number ? data[i].suspect.number : ''), right + 17, top + 74)

        doc.setFontSize(font)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Cidade: ', right, top + 79).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.city ? data[i].suspect.city : ''), right + 16, top + 79)

        let variableHeigth = 110;

        doc.setFontSize(fontsubtitle)
        // @ts-ignore
        doc.setFont(undefined, 'bold').text('Observações: ', right, top + 88).setFont(undefined, 'normal');

        doc.setFontSize(font)
        doc.text((data[i].suspect.suspect_obs ? data[i].suspect.suspect_obs.replace(/(\r\n|\n|\r)/gm, ' - ') : ''), right, top + 94, {
          maxWidth: 120,
        })

        if (data[i].suspect.suspect_veicle) {
          doc.setFontSize(font)
          // @ts-ignore
          doc.setFont(undefined, 'bold').text('Veiculos: ', right, variableHeigth + top).setFont(undefined, 'normal');

          doc.setFontSize(font)
          doc.text('                   ' + (data[i].suspect.suspect_veicle ? data[i].suspect.suspect_veicle : ''), right, top + variableHeigth, {
            maxWidth: 120,
          })
        }
      }

      doc.line(20, 10, 20, 150);/**@esquerda*/
      doc.line(148, 10, 148, 150);/**@meio*/
      doc.line(276, 10, 276, 150);/**@direita*/
      doc.line(20, 10, 276, 10);/**@cima*/
      doc.line(20, 150, 276, 150); /**@baixo*/

      /*
      * caso i seja inpar e menor que o array add mais uma pagina
      * */
      if (i+1 < data?.length) {
        if (i % 2 !== 0) {
          doc.addPage();
        }
      }

      doc.setFontSize(font)
      // @ts-ignore
      doc.setFont(undefined, 'bold').text('Local da ocorrência:', right, top + 79).setFont(undefined, 'normal');

      doc.setFontSize(font)
      doc.text('teste', right + 16, top + 79)
    }

    doc.save('a4.pdf');
  }
}
