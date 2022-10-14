import axios from "axios";

const path = "/animals";

const instance = () =>axios.create({
  baseURL:"http://localhost:3005",
  headers:{
    "Content-Type":"application/json"
  }
});

const getAnimals = async ()=>
  await instance().get(path);

const getAnimalById = async (id)=>
  await instance().get(`${path}/${id}`);

const postAnimals = async (data)=>
  await instance().post(path, data);

const putAnimal = async (id, data)=>
  await instance().put(`${ path }/${ id }`, data);

const deleteAnimals = async (id)=>
  await instance().delete(`${ path }/${ id }`);

export { getAnimals, postAnimals, getAnimalById, putAnimal, deleteAnimals };