import React from "react";
import { useSelector } from "react-redux";

export const EmailList = () => {

    const emails = useSelector((state) => state.emails)

    return (
        <>
            {emails.map((useremail, i) => {
                return (
                    <div className="email--heading" key={i} >
                        <h3>{useremail.email}</h3>
                    </div>
                )
            })}
        </>
    )

}