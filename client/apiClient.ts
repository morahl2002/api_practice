// fetches the dog data from the internet

import request from 'superagent'
import { DogImage } from './models/dog'
// This brings in the DogImage interface, so this file knows what shape to expect the data to be in

// Dog API's server picks a different photo and sends it back
// Promise<DogImage> tells TypeScript "this function will eventually hand back something shaped like DogImage" (the interface we wrote earlier), wrapped in a Promise since it's async
// request.get(url) = superagent's way of saying "go fetch data from this address."
// await = pause here until the server responds
// const result = store what comes back in a variable called result
// return result.body = hand that data straight back to whoever called this function

export async function getRandomDog(): Promise<DogImage> {
  const result = await request.get('https://dog.ceo/api/breeds/image/random')
  return result.body
}
