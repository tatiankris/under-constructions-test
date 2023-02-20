import React, {useState} from 'react'
import s from './Footer.module.scss'
import Popup from "../popup/Popup";

function Footer() {

    const [value, setValue] = useState('')

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if (emailError && e.currentTarget.value) {
            setEmailError('')
        }

    }
    const [open, setOpen] = useState(false)
    const openPopupHandler = () => {
        setOpen(true)
    }
    const closePopupHandler = () => {
        setOpen(false)
    }

    const [emailError, setEmailError] = useState('')

    const sendEmailHandler = ( e: React.FormEvent<HTMLFormElement>) => {

        const email = value.trim()
        e.preventDefault()

        if (!email.length) {
            setEmailError('Email is equired!')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError('Invalid email address!')
        } else {
            fetchQuery(email)
            setValue('')
        }

    }

    const fetchQuery = (email: string) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: email,
                body: email,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.title === email && json.body === email) {
                    openPopupHandler()
                }
            });


    }






    return (
        <footer className={s.footer}>
            <div className={s.inputBox}>
                <form onSubmit={sendEmailHandler} className={s.inputForm}>
                    <input onBlur={() => {setEmailError('')}} style={emailError ? {border: '2.2px solid #ed0c0c', borderRadius: '40px'} : {}}
                           onChange={handleChange} value={value} placeholder={'Enter your Email and get notified'}/>
                    <button onBlur={() => {setEmailError('')}}
                            className={s.inputButton}>
                        <img className={s.arrow} src={'../../public/arrow.svg'}/>
                    </button>
                    <div className={s.emailError}>{emailError ? emailError : ''}</div>
                </form>

            </div>

            {
                open && <Popup closePopupHandler={closePopupHandler}/>
            }

        </footer>
    )
}

export default Footer
