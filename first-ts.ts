// types : [number,string, boolean, object,array,tuple,enum,any]

let typescript = document.getElementById('typescript');

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}
const person: {
  name: string;
  age: number;
  hobbies: Array<string>;
  role: Role;
} = {
  name: 'wonde',
  age: 32,
  hobbies: ['Sports', 'Dancing'],
  role: Role.ADMIN,
};

type numberType = number;
function addTwoNumberTs(a: numberType, b: numberType) {
  return +a + +b;
}

let sumTs1 = addTwoNumberTs(2.5, 3);

let sumTs2 = `<p>The Sum of 10 and ${person.age} is  ${addTwoNumberTs(
  10,
  person.age,
)} </p>`;

function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number')
    return input1 + input2;
  return input1.toString() + input2.toString();
}

sumTs2 += `Role : [${person.role}] My Hobbies:</br>`;
for (let hobby of person.hobbies) {
  sumTs2 += ` #  ${hobby.toLocaleUpperCase()} </br>`;
}

console.log(combine(10, 5));
console.log(combine('wondwosen', ' shi'));

typescript.innerHTML = String(sumTs2);
typescript.innerHTML += String(sumTs1);

type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

let todo : Todo = {
  id:1,
  text:"take exam",
  done:false
}

// todo.id= todo.id + 2;
// todo.done= !todo.done

todo = {...todo,text:"take a brake",id:todo.id + 2}

console.log(todo)