const Link = ({func, href, className, children}) => {

    const changeUrl = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent("popstate")
        window.dispatchEvent(navEvent)
    }
    return(
        <li onClick={func}><a href={href} className={className} onClick={changeUrl} >{children}</a></li>
    )
}

export default Link