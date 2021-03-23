const Modal = (props) => {
    return(
    <div className="overlay" onClick={props.callback}>
        <div className="modal">
            <div>
                <img src={props.modalImg} width="100%" height="auto" />
            </div>
        </div>
    </div>
    )
}

export default Modal;