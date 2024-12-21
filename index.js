// // Task 1
// const bankAccount = {
//     ownerName: "Valeria",
//     accountNumber: 6642,
//     balance: 6564543,

//   deposit(amount) {
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     this.balance -= amount;
//   },
// };

// let continueTransaction;
// do {
//   const userChoice = confirm(
//     "Натисніть 'ОК', щоб поповнити рахунок, або 'Скасувати', щоб зняти кошти з рахунку."
//   );

//   if (userChoice === true) {
//     const depositAmount = Number(
//       prompt("ВВедіть суму, на яку ви хочете поповнити рахунок")
//     );
//     bankAccount.deposit(depositAmount);
//   } else {
//     const withdrawAmount = Number(
//       prompt("Введіть суму, яку хочете зняти з рахунку")
//     );
//     bankAccount.withdraw(withdrawAmount);
//   }

//   continueTransaction = confirm(
//     "Може ви ще щось хочете зробити?"
//   );
// } while (continueTransaction === true);

// console.log(bankAccount.balance);
// // Task 2

// let message;

// const weather = {
//   temperature: 7,
//   humidity: 30,
//   windSpeed: 5,

//   checkTemperature(inputTemperature) {
//     if (inputTemperature < 0) {
//       message = "Температура нижче 0 градусів";
//     } else {
//       message = "Температура вище або дорівнює 0 градусів";
//     }
//     return message;
//   },
// };
// let continueChangingTemperature;
// do {
//   const inputTemperature = Number(prompt("Введіть будь яку температуру"));
//   alert(weather.checkTemperature(inputTemperature));
//   continueChangingTemperature = confirm("Можливо ви хочете змінити темперетуру");
// } while (continueChangingTemperature === true);
// Task 3

const user = {
    name: "Artem",
    email: "bejviklik@gmail.com",
    password: "24345747",
  
    login(inputEmail, inputPassword) {
      if (inputEmail !== this.email) {
        return "Ви ввели неправильну пошту";
      }
      if (inputPassword !== this.password) {
        return "Ви ввели неправильний пароль";
      }
      if (inputEmail !== this.email || inputPassword !== this.password) {
        return "Ви ввели все неправильно";
      }
      return "Ви ввели все правильно";
    },
  };
  
  let userEmail;
  let userPassword;
  let tryAgain;
  
  do {
    userEmail = prompt("Введіть свою пошту");
    userPassword = prompt("Введіть свій пароль");
    const result = user.login(userEmail, userPassword);
    alert(result);
    
    tryAgain = result !== "Ви ввели все правильно" && confirm("Спробувати ще раз?");
  } while (tryAgain);
//   Task 4
const film = {
    name: "Персонаж",
    directorName: "Джордж Річмонд",
    releaseYear: 2021,
    filmRating: 7.1,
  
    verifyRating(rating) {
      if (rating > 8) {
        return true;
      } else {
        return false;
      }
    },
  };
  
  if (film.verifyRating(film.filmRating) === true) {
    alert("Ви можете дивитись цей фільм, адже він сподобався людям");
  } else {
    alert("Виберіть якийсь інший фільм");
  }
  
  alert(
    `Дані про фільм: назва - ${film.name}, режисер - ${film.directorName}, рік - ${film.releaseYear}, рейтинг - ${film.filmRating}`
  );
  