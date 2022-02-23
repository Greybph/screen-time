const availableInterests = [
  'school',
  'music',
  'sports',
  'science',
  'nature',
  'art',
  'space',
  'superheros',
  'magic'
]

export default async function compareInterest(interest) {
  if (availableInterests.includes(interest)) {
    return interest
  }
  
  const response = await fetch(`https://words.bighugelabs.com/api/2/2713ee59bb33ec5fe7a12f8ad8e61c17/${interest}/json`)
  if (response.status === 404) {
    return null
  } 
  const data = await response.json()
  const synonyms = data.noun.syn
  
  const matches = synonyms.filter(s => availableInterests.includes(s))
  return matches[0]
}