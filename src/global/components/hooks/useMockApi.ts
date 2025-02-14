import { useState } from "react"

const useMockMutation = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null> (null)
  const [data, setData] = useState<{ success: boolean } | null>(null)

  const mockMutation = async (inputData: any) => {
    setLoading(true)

    setTimeout(async () => {
      try {
        console.log("Mutation executed", inputData)

        const result = { success: true }
        setData(result)

        setLoading(false)
  
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
        setLoading(false)  
      }
    }, 2000) 
  }

  return { mockMutation, loading, setLoading, error, data }

}

export default useMockMutation
