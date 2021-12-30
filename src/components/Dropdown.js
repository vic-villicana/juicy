import Link from '../Link'
const Dropdown = () => {
    return(
        <div className="ui secondary poiting menu">
            <Link href='/' className='item'>
                Dashboard
            </Link>
            <Link href='/menu' className='item'>
                Menu
            </Link>
            <Link href='/cart' className='item'>
                Cart
            </Link>
            <Link href='/home' className='item'>
                Home
            </Link>
        </div>
    )
}

export default Dropdown