import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.type == undefined || user.telephone == undefined || user.email == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEdit(user) {
    if(user.telephone == undefined || user.name == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEditBus(bus) {
    if(bus.owner == undefined || bus.type == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateChange(user) {
    if(user.email == undefined || user.password == undefined || user.npassword == undefined || user.cpassword == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  }

  validateTelephone(telephone) {
    const re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return re.test(String(telephone));
  }

  validatePrice(price) {
    const re = /^[0-9]{1,5}.[0-9]{2}$/;
    return re.test(String(price));
  }

  validateLicense(license) {
    const re = /^[A-Z]{2,3}-[0-9]{4}$/;
    return re.test(String(license));
  }

  validateNIC(nic) {
    const re = /^[0-9]{9}[v|V]$/;
    return re.test(String(nic));
  }

  validateRoute(route) {
    if(route.route_id == undefined || route.cities == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateBooking(booking) {
    if(booking.name == undefined || booking.email == undefined || booking.telephone == undefined || booking.nic == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateBus(bus) {
    if(bus.license == undefined || bus.type == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateTurn(turn) {
    if(turn.turn_id == undefined || turn.license == undefined || turn.route_id == undefined || turn.stime == undefined || turn.dtime == undefined || turn.date == undefined || turn.ddate == undefined) {
      return false;
    } else {
    return true;
    }
  }
}
