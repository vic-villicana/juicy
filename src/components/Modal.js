const Modal = ({handleClose, show, children}) => {
    //check if the show value is equal to true if it is show the modal
    const showOrNot = show ? "modal display-block" : "modal display-none"
    return (
        <div className={showOrNot}>
            <section className="modal-body">
                {children}
                <button type="button" className="close-btn" onClick={handleClose}>
                    Close
                </button>
            </section>                        
        </div>
    )
}

export default Modal