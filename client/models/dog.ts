// describes what the API's data looks like

export interface DogImage {
  message: string
  status: string
}

// export — makes this available to other files, so dogApiClient.ts and DogApp.tsx can use it later
// interface DogImage — you're naming this shape "DogImage" (you can call it whatever you want, but the name should describe what it represents)
// message: string — says "there will be a field called message, and it will always be text"
// status: string — same idea, a field called status, also text
