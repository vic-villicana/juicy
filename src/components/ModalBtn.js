
const ModalBtn = ({modalOpen, children}) => {

    // const [modalOpen, setModalOpen] = useState(true)

    // const toggleModal = (bool) => {
    //     return () => {
    //         setModalOpen(bool)
    //     }
    // }

        return(
           
            <button onClick={modalOpen} className="details">{children}</button>
           
        )
    
}

export default ModalBtn
