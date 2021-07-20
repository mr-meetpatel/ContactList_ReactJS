import React from 'react'
import { Paper, LinearProgress } from "@material-ui/core"

function List({ loading, contacts }) {
    console.log(contacts)
    return (
        <Paper style={{ margin: "20px auto", padding: "20px", maxWidth: "350px", position: "relative", backgroundColor: "#dff9fb" }}>
            {loading ? <LinearProgress /> : (
                contacts.data.map((contact) => {
                    return <div style={{ display: "flex" }}>
                        <img style={{ width: '70px', borderRadius: "50%", margin: "10px 20px 0  0" }} alt={contact.firstName} src={contact.picture}></img>
                        <div>
                            <h4>{contact.firstName} {contact.lastName}</h4>
                            <p style={{ fontSize: "10px" }}>{contact.email}</p>
                        </div>
                    </div>
                })
            )

            }

        </Paper >

    )
}

export default List
