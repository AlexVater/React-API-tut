import React, {useEffect, useState} from "react";
import "./Users.css"
import {getUserList} from "../services/userList";

const Users = () => {
    const [userList, setUserList] = useState()

    useEffect(() => {
        getUserList()
            .then(data => {
                let users = data.results.map((user) => {
                    return ({user})
                })
                setUserList(users)
            })
    }, [])

    return (
        <div>
            <h2 className="title text-center mt-3">usuários aleatórios</h2>
            <div className="row d-flex justify-content-center">
                {userList && userList.map((user, i) =>
                    <div className="col-5 pr-0" key={i}>
                        <div className="card card-custom fade-in">
                            <div className="card-body">
                                <div className="row d-flex aling-content-center">
                                    <div className="col-4">
                                        <img src={user.user.picture.large} alt=""/>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <div>
                                            <h4>{user.user.name.first} {user.user.name.last}</h4>
                                            <p className="mb-1">{user.user.email}</p>
                                            <p className="mb-0">{user.user.cell}</p>
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex flex-row-reverse">
                                        <span className="material-icons">{user.user.gender}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users