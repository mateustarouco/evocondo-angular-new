import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  currentHour = new Date()

  /**
   * @description:
   * Formata a data atual e retorna ao Usuário
   */
  formatCurrentData() {
    let day = ''
    let month = ''
    let hour = ''
    let minute = ''

    if (this.currentHour.getDate() < 9) {
      day = '0' + this.currentHour.getDate()
    } else {
      day = this.currentHour.getDate() + ''
    }

    if ((this.currentHour.getMonth() + 1) < 9) {
      month = '0' + (this.currentHour.getMonth() + 1)
    } else {
      month = (this.currentHour.getMonth() + 1) + ''
    }

    if (this.currentHour.getHours() < 9) {
      hour = '0' + this.currentHour.getHours()
    } else {
      hour = this.currentHour.getHours() + ''
    }

    if (this.currentHour.getMinutes() < 9) {
      let x = this.currentHour.getMinutes()
      minute = '0' + x
    } else {
      minute = this.currentHour.getMinutes()  + ''
    }

    let year = this.currentHour.getFullYear()

    return day + '-' + month + '-' + year + ' ' + hour + ':' + minute
  }

  /**
   * @description:
   * Formata a hora atual e retorna ao Usuário
   */
  formatCurrentHour() {

    let hour = ''
    let minute = ''

    if (this.currentHour.getHours() < 9) {
      hour = '0' + this.currentHour.getHours()
    } else {
      hour = this.currentHour.getHours() + ''
    }

    if (this.currentHour.getMinutes() < 9) {
      minute = '0' + this.currentHour.getMinutes()
    } else {
      minute = this.currentHour.getMinutes() + ''
    }

    return hour + ':' + minute
  }

  /**
   * @description:
   * Formata a hora atual, adciona 30 minutos e retorna ao Usuário
   */
  formatCurrentHour_() {
    let time = new Date();
    let outraData = new Date();

    outraData.setMinutes(time.getMinutes() + 30);

    let hour = ''
    let minute = ''

    if (outraData.getHours() < 9) {
      hour = '0' + outraData.getHours()
    } else {
      hour = outraData.getHours() + ''
    }

    if (outraData.getMinutes() < 9) {
      minute = '0' + outraData.getMinutes()
    } else {
      minute = outraData.getMinutes() + ''
    }

    return hour + ':' + minute
  }

  /**
   * @description:
   * Formata a data recebida por parametro
   * @augments:
   *  _date: Data no typo Date
   *  _hour: Hora no formato 00:00
   */
  formatchosedData(_date: Date, _hour: string) {
    let day = ''
    let month = ''

    if (_date.getDate() < 9) {
      day = '0' + _date.getDate()
    } else {
      day = _date.getDate() + ''
    }

    if ((_date.getMonth() + 1) < 9) {
      month = '0' + (_date.getMonth() + 1)
    } else {
      month = (_date.getMonth() + 1) + ''
    }

    let year = _date.getFullYear()

    return day + '-' + month + '-' + year + ' ' + _hour
  }

  /**
   * @description:
   * checa se a data escolhida não é
   * menor q a data atual
   *
   * @augments:
   *  _date: Data no typo Date
   *  _hour: Hora no formato 00:00
   */
  checkHour(finalDate: any, _value: any) {
    let value = _value.split(':')
    let hour = parseInt(value[0])
    let minutes = parseInt(value[1])
    if (this.currentHour.getDay() == finalDate.getDay()) {
      if (hour == this.currentHour.getHours()) {
        return minutes < this.currentHour.getMinutes();
      } else {
        return hour < this.currentHour.getHours()
      }
    } else {
      return false
    }
  }

  returnRealDate(date_: string) {
    let date = date_
    let value = []
    date = date.slice(0, 10)
    value = date.split('-', 3)
    let form_date = value[2] + '-' + value[1] + '-' + value[0]
    return form_date
  }

  formarScheduleDate(hour: any) {
    let intDate = new Date(hour.initial_date)
    let endDate = new Date(hour.final_date)

    let intTime = hour.initial_time
    let endTime = hour.final_time
    let warnTime = hour.warn_time

    let intWarnMonth
    let intMonth
    let endMonth
    let intWarnDay
    let intDay
    let endDay

    let warnDate = new Date(hour.warn_date)
    let warn = ''

    if(hour.warn_date != ''){

      if (warnDate.getUTCDate() < 9) {
        intWarnDay = '0' + (warnDate.getUTCDate())
      } else {
        intWarnDay = warnDate.getUTCDate()
      }

      if (warnDate.getMonth() < 9) {
        intWarnMonth = '0' + (warnDate.getMonth() + 1)
      } else {
        intWarnMonth = warnDate.getMonth() + 1
      }
      warn = intWarnDay + "-" + intWarnMonth + "-" + warnDate.getFullYear() + " " + warnTime + ':00'
    }

    if (intDate.getUTCDate() < 9) {
      intDay = '0' + (intDate.getUTCDate())
    } else {
      intDay = intDate.getUTCDate()
    }

    if (endDate.getUTCDate() < 9) {
      endDay = '0' + (intDate.getUTCDate())
    } else {
      endDay = intDate.getUTCDate()
    }

    if (endDate.getMonth() < 9) {
      intMonth = '0' + (intDate.getMonth() + 1)
    } else {
      intMonth = intDate.getMonth() + 1
    }

    if (endDate.getMonth() < 9) {
      endMonth = '0' + (endDate.getMonth() + 1)
    } else {
      endMonth = endDate.getMonth() + 1
    }

    let init = intDay + "-" + intMonth + "-" + intDate.getFullYear() + " " + intTime + ':00'
    let end = endDay + "-" + endMonth + "-" + endDate.getFullYear() + " " + endTime + ':00'

    return {
      warn: warn,
      init: init,
      end: end,
    }
  }
}
