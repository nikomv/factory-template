import "./styles.css";

const PEOPLE_LIST = [
  {
    name: "Иван",
    specialist: "Врач",
  },
  {
    name: "Владимир",
    specialist: "Преподаватель",
  },
  {
    name: "Виталий",
    specialist: "Студент",
  },
];
const ROOT = document.getElementById("app");

class Doctor {
  get(name) {
    return `<div class="card doctor">Карточка доктора: ${name}</div>`;
  }
}

class Teacher {
  render(name) {
    return `<div class="card teacher">Карточка учителя: ${name}</div>`;
  }
}

class Student {
  create(name) {
    return `<div class="card student">Карточка студента: ${name}</div>`;
  }
}

class Factory {
  create({ name, specialist }) {
    switch (specialist) {
      case "Врач":
        return new Doctor().get(name);
      case "Преподаватель":
        return new Teacher().render(name);
      case "Студент":
        return new Student().create(name);
      default:
        return "";
    }
  }
}

const factory = new Factory();

PEOPLE_LIST.forEach((card) => {
  ROOT.innerHTML += factory.create(card);
});
