export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk54ErLFHCQi7WhtafYvcUNBrkzEBhifhug4Cxec0IJ40PwjZp8Idy1q5l3ljxanc1isZx8BKcQ6K399BSSiSuEVgIQPXz8ragA0JZ7HRx5TSFlA1rexq7DLlIhVrXsCvotg3ulhUqyvVUSrQoWCSMpvef3bE6CNLW14e0sBJUdJRt1CxRnU",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
  )
  

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
