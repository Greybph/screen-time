import {Form, useTransition} from 'remix'

function InterestsList({profile}) {
  const transition = useTransition()

  return (
    <ul>
    {profile?.interests.map(interest => (
      <li>
        <Form method='post' className={transition.submission ? 'hidden' : ''}>
          <input type="hidden" name="_action" value="delete" />
          <input type="hidden" name="interest" value={interest} />
          <span>{interest}</span>
          <button type="submit">X</button>
        </Form>
      </li> 
    ))}
  </ul>  
  )
}

export default InterestsList