import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component1/header";
import Body from "./component1/body";

function GithubProfile(){

    return(
    <>
    <Header/>
    <Body/>
    </>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<GithubProfile/>)