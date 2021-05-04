import propTypes from 'prop-types'
import Button from './button'

const Header = ({title, onAdd, showAdd}) => {
    console.log(showAdd);
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ?'red' : 'green'}
             text={showAdd ? 'Close' : 'ADD'}
            onClick={onAdd} />
           
            </header>
    )
}
Header.defaultProps={
    title: 'Task tracker',
}
Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
