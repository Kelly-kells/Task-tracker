import propTypes from 'prop-types'

const button = ({ color,text, onClick }) => {
    return (
        <button style={{backgroundColor: color}}
         className='btn' onClick={onClick}>
             {text}
         </button>
    )
}
button.defaultProps={
    color:'steelblue'
}

button.propTypes ={
    text:propTypes.string,
    color:propTypes.string
 }


export default button
