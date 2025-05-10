// //TODO № 1 з колбеком =====================================
// //Напишіть дві функції
// // letMeSeeYourName(callback) - запитує ім'я користувача
// //через prompt та викликає callback функцію
// //greet(name) - коллбек, що приймає ім'я і логірує в консоль
// //Рядок "Привіт <name>"
// //Реалізуй перевірку, що prompt не порожній


// //Напишіть дві функції
// //makeProduct(name, price, callback) - приймає
// //ім'я та ціну товару, а також callback.
// //Функція створює об'єкт товару, додаючи йому унікальний
// //ідентифікатор як id і викликає callback
// //Передаючи йому створений об'єкт.
// //showProduct(product) - коллбек приймаючий об'єкт
// //продукту і логірующий їх у консоль
// // id: Math.random()
// // product.id = Date.now()
// // product.id = new Date()
// // product.id = Math.floor(Math.random() * 100)

// // function showProduct(product) {
// //     console.log(`
// //         Product info:
// //         ID: ${product.id}
// //         Name: ${product.name}
// //         Price: ${product.price}
// //         `)
// // };
// // function makeProduct(name, price, callback) {
// //     const product = {
// //         name,
// //         price,
// //         id: Math.floor(Math.random() * 100)
// //     };
// // callback(product);
// // }
// // makeProduct("apple", 15, showProduct);
// // makeProduct("orange", 30, showProduct);



// //TODO: № 4 на this ✅==============================================
// //Виправте помилки, щоб код працював

// // function callAction(action) {
// //   action();
// // }

// // const item = {
// //   getQuantity() {
// //     console.log(this.quantity);
// //   },
// //   quantity: 5,
// // };

// // callAction(item.getQuantity.bind(item));



// //TODO: № 5 на перебирання ✅ ==============================================
// //Зібрати в allTopics масив всіх предметів всіх курсів
// //Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode","Type system","Loops","Function","Git","Conditions","Classes","DOM"],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: ["VSCode","NPM","Bundlers","Transpiling","Git","Promises","AJAX","GitHub"],
//   },
// ];

// // const allTopics = courses.flatMap(course => course.topics);
// // const uniqueTopics = [...new Set(allTopics)];

// //   console.log(allTopics)
// //   console.log(uniqueTopics);





//TODO: № 6 на функцію конструктор ✅ =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();


// function User({ userName, age, numbersOfPost }) {
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
  
//     this.getInfo = function () {
//       return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//     };
//   }
  
// const ivan = new User({ userName: "Ivan", age: 20, numbersOfPost: 18 });
  
//   console.log(ivan);
//   console.log(ivan.getInfo());


//TODO 7: =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

class Client {
    #login;
    #email
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        this.#email = newEmail
    }

    get getClientData() {
        return {
            login: this.#login,
            email: this.#email,
        };
    }
}


const client = new Client("mango", "mango@gmail.com");
client.changeEmail = "change_mail@gmail.com";
console.log(client.getClientData); 



