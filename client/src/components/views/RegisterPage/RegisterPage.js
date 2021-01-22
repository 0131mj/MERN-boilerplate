import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordConfirm, setPasswordConfirm] = useState("");
    const [Name, setName] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onPasswordConfirmHandler = (event) => {
        setPasswordConfirm(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== PasswordConfirm){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
            .then(response => {
                console.log(response)
                if (response.payload.success) {
                    props.history.push('/login');
                } else {
                    alert('Failed to Sign Up')
                }
            })

    }

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: "100vw", height: "100vh"
        }}>
            <form style={{ display: "flex", flexDirection: "column" }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={PasswordConfirm} onChange={onPasswordConfirmHandler} />

                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
