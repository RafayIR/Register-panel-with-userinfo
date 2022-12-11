import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailAdded } from "./emailSlice";


export const Addemail = () => {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const onEmailAdded = (e) => (setEmail(e.target.value))

    const onSaveEmail = () => {
        if (email) {
            dispatch(
                emailAdded({ email })
            )

            setEmail('')
        }

    }

    return (
        <>
            <div className="email--wrapper">

                <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ADD EMAIL
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="input-group">
                                        <label className="input-group-text">Email</label>
                                        <input className="form-control" type={email} name='email' value={email} onChange={onEmailAdded} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onSaveEmail}>Save !</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}