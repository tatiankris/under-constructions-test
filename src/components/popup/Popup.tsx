import React from "react";
import s from './Popup.module.scss'

type PopupPropsType = {
    closePopupHandler: () => void
}
function Popup({closePopupHandler, ...props}: PopupPropsType) {

    const closeKeyPressHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.charCode == 13 && closePopupHandler()
    }

    return (
        <div className={s.popup}>
            <div className={s.popupBox}>
                <button onClick={closePopupHandler} className={s.crossButton}>
                    <img src={'../../public/cross.svg'} />
                </button>
                <h1>Success!</h1>
                <p className={s.popupInfo}>You have successfully subscribed <br />to the email newsletter</p>
                <button autoFocus onKeyPress={closeKeyPressHandler} onClick={closePopupHandler} className={s.closeButton}>Close</button>
            </div>
        </div>
    )
}

export default Popup
