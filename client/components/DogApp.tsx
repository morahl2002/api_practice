// the actual page: stores the data, fetches it on load, displays it

// useState, useEffect = "I want to use two tools that come from React: useState (a storage box) and useEffect (a way to run code automatically at a certain time)"
// getRandomDog = "I want to use the getRandomDog function I wrote in another file, so I can call it here"
// DogImage = "I want to use the DogImage shape I wrote in another file, so TypeScript knows what the data looks like"

// creates a storage box called dog, starting out empty (null). setDog is the tool we'll use later to put the real dog data into that box, once we have it

// creates another storage box that tracks what's currently happening: are we idle (nothing happening yet), loading (waiting on the internet), successful, or did something go wrong? It starts as 'idle'

// a third storage box, for holding an error message if something goes wrong, starting empty

// loading = The moment this function starts running, immediately flip our loadingState box to 'loading'. This happens instantly — before we've even asked the internet for anything yet. It's what makes the loading spinner appear right away

// error/null = Clear out any leftover error message from a previous attempt. If someone clicked the button once, got an error, then clicked again, we don't want the old error message still showing while we try again

// try = Attempt the following code. If anything inside fails, don't crash the whole app — jump down to the catch block instead

// getRandomDog() = call the function from dogApiClient.ts, the one that actually goes and asks the Dog API for data

// await pause right here, don't move to the next line, until that request finishes and we get a response back

// const data = once we have the response, store it in a variable called data

// setDog is always related to its value pair (dog)

// setDog(data) updates the dog box with the new API data, which automatically triggers React to re-render and show it

// flips the loadingState box to 'success' since the function worked. This is the line that makes your JSX switch from showing the loading spinner to showing the actual dog picture (Later, when we write the JSX, we'll set it up so that certain sections only show when loadingState equals certain values)

// catch = closes the try block, and opens a new catch block. Everything inside catch only runs if something inside try failed

// err holds whatever the actual error/reason was for that failure.

// console.log() prints the real, technical error message to the browser console — this is just for you, the developer, to see while debugging. Regular users of the app never see this.

// setError stores a friendly, user-facing message so the person using the app sees something understandable, not the raw technical error

// setError(...) is the only way to change the error box — call it with null to clear it, or a message to set it, and React automatically updates the screen.

// setLoadingState('error') marks the mode as failed, which will later control showing the error message in the JSX

// setDog(null) clears any old dog picture so it doesn't show alongside the new error message

import { useState, useEffect } from 'react'
import { getRandomDog } from '../apiClient'
import { DogImage } from '../models/dog'
import '../main.css'

function DogApp() {
  const [dog, setDog] = useState<DogImage | null>(null)
  const [loadingState, setLoadingState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [error, setError] = useState<string | null>(null)

  const handleGetRandomDog = async () => {
    setLoadingState('loading')
    setError(null)

    try {
      const data = await getRandomDog()
      setDog(data)
      setLoadingState('success')
    } catch (err) {
      console.error('Error fetching random dog:', err)
      setError('Failed to fetch a dog picture. Please try again.')
      setLoadingState('error')
      setDog(null)
    }
  }

  return (
    <div className="app-container">
      <h1>Dog Explorer</h1>

      <div className="search-form">
        <button
          onClick={handleGetRandomDog}
          disabled={loadingState === 'loading'}
          className="button"
        >
          {loadingState === 'loading' ? 'Loading...' : 'Get Random Dog'}
        </button>
      </div>
    </div>
  )
}
export default DogApp
