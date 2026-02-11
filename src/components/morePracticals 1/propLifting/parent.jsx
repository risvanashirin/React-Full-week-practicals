    import { useState } from "react";
    import Child from "./child";

    function Parent() {
    const [message, setMessage] = useState("");

    // function to receive data
    function handleData(data) {
        setMessage(data);
    }

    return (
        <>
        <h2>From Child: {message}</h2>
        <Child sendData={handleData} />
        </>
    );
    }

    export default Parent;
