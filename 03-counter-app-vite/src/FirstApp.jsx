// const getResult = (a,b) => {
//   return a + b;
// }


// export const FirstApp = () => {
  
//   return (
//     <>
    
//     <h1> { getResult(1,2)} </h1>
//     <p> Soy un subtitulo </p>

//     </>
//   );
// }

import PropTypes from 'prop-types';

export const FirstApp = ( {title,subTitle, name}) => {
  
  // console.log(props);

  return (
    <>
    <h1>{title}</h1>

    <p> {subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Emma Pava',
  subTitle: 'No hay subtítulo',
  title: 'No hay título'
}


