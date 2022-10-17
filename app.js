const data = {
  id:1,
  name:"Yhazley",
  nit:"90000-0",
  address:"calle falsa 123",
  phone:"+57 3135558888"
};

let initialValues = {
  name:"",
  nit:"",
  address:"",
  phone:""
};

const {id, phone, ...dataToSend} = data;

const destructuredPhone = phone.split(" ");

initialValues = {
  ...dataToSend,
  indicative:destructuredPhone[0],
  phone:+destructuredPhone[1],
};

console.log(destructuredPhone[0].replace("+",""));


