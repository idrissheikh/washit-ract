export default class Reservations {
  static setReservation(reservation) {
    let list = JSON.parse(localStorage.getItem("reservation"));
    list.push(reservation);
    localStorage.setItem("reservation", JSON.stringify(list));
  }

  static getReservations() {
    const list = JSON.parse(localStorage.getItem("reservation"));
    return list;
  }

  static cancelReservations(reservation) {
    const index = this.list.indexOf(reservation);
    this.list.slice(index, 1);
    return this.list;
  }
}
