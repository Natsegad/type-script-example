import "reflect-metadata";
import envs from "./config/env";
import { UserUseCase } from "./usecase/User";

const userUseCase = new UserUseCase();
async function start() {
  await userUseCase
    .create()
    ?.then((data) => {
     
    })
    .catch((err) => {
   
    });
  console.log(envs.API_KEY);
}
start();