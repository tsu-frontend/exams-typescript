const userName: string = "ahmad";
const userAge: number = 20;

type types = {
  profession: string;
  city: string;
  country: string;
};

function user(userName: string, userAge: number) {
  const user: types = {
    profession: "frontend dev",
    city: "tbilisi",
    country: "georgia",
  };
  console.log(userName, userAge, user.profession, user.city, user.country);
}

user(userName, userAge);
