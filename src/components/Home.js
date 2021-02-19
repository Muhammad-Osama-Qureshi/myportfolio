import React from 'react'

import Logo from "./profile2.jpeg"
export const Home = () => {
    return (
        
            <div className="container">
                <div className="row algin-items-start ">
                    <div className="col col-md-4 col-12  ">
                      <h1 className="mt-1">Hi, I am Muhammad Osama</h1>
                        <p>
                            My name Is muhammad Osama i am from mehran univeristy
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </p>
                    </div>
                    <div className=" ">
                    <img className="img-fluid float-left img-border mx-auto" src={Logo} width="100%" alt=""/>
                    </div>
                </div>
                <div className="row">
                <div className="col col-md-6 col-12">
                    <h1 className="mt-2">About Me</h1>
                    My name Is muhammad Osama i am from mehran univeristy In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </div>
                </div>
            </div>
 
    )
}
