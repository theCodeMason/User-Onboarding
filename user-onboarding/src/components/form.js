import React, {Component} from 'react';

const Magicform = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    const doChange = (e) => {
        const { name, value, checked, type } = e.target;
        const updatedVal = type === "checkbox" ? checked : value;
        change(name, updatedVal);
    }

    const doSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Magical User Onboarding Form</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form id="magicForm" onSubmit={doSubmit}>
                <label>
                    <div>Username:</div>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={doChange}
                    />
                </label>
                <label>
                    <div>Email:</div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={doChange}
                    />
                </label>
                <label>
                    <div>Password:</div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={doChange}
                    />
                </label>
                <label>
                    <div>Terms of Service</div>
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={doChange}
                    />
                </label>
                <input id="magicButton" type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default Magicform;
