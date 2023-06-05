import React from "react";

export default function UserData({users}){
    return(
        <>
        users.map((curruser)=> {}
            const {email , password,Phone_Number,Address} = curruser;

            return (
                <tr>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{Phone_number}</td>
                    <td>{Address}</td>
                </tr>
            )
        })
        </>
    );
}