
import PropTypes  from 'prop-types';

export const CounterApp = ({ value}) => {

  const hadleAdd = ( event )=> {

   console.log(event)

  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2> { value } </h2>
    <button onClick={ hadleAdd }>
      +1
    </button>
    </>
  )
}

CounterApp.propTypes = {
 value: PropTypes.number.isRequired
}
