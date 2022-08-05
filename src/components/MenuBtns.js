


const MenuBtns = (props) => {
    
    const Mbtns = props.menuOptions.map(option => {
        return <button className={`menu-options ${props.selected === option.id && 'selected' }`} key={option.id} onClick={() => props.menuClick(option.id)}>{option.menu}</button>
    })

    return(
        <div className="menu-option-container">
            {Mbtns}
        </div>
    )
}

export default MenuBtns