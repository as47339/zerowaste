import * as React from "react";
import { OnSubmit } from "react-hook-form";
import { LoadingBar, ErrorMessage } from "../components";

type Inputs = {
    name?: string
    email: string
    password: string
}

interface AuthProps {
    loading: boolean
    errorMessage?: string
    register: any
    handleSubmit: (callback: OnSubmit<Inputs>) => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
    submit: any
    loginPage?: boolean
}

export const Auth: React.FunctionComponent<AuthProps> = ({ loading, errorMessage, handleSubmit, register, submit, loginPage = true }): React.ReactElement => {

    if (loading) return <LoadingBar />
    if (errorMessage) return <ErrorMessage message={`ERROR: ${errorMessage}`}></ErrorMessage>;
    return (
        <div className="content overflow-hidden flex justify-center items-center">
            <div className="form  flex flex-col">
                <h1 className="form-header font-bebas uppercase text-darkGray text-center pb-0 m-0">{loginPage ? 'Log in' : 'Sign Up'}</h1>

                <form onSubmit={handleSubmit(submit)}>
                    {!loginPage && <input name="name" type="text" placeholder="Name" ref={register({ required: true, maxLength: 30 })} />}
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    <input name="password" type="password" placeholder="Set a password" ref={register({ required: true })} />
                    <input type="submit" title="Submit" className="bg-green hover:bg-green text-white font-bold py-2 px-4 rounded outline-none m-1 border-0" />
                </form>
            </div>
        </div >)
}