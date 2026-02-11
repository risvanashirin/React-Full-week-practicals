function Child({ sendData }) {

  function sendToParent() {
    sendData("Hello Parent!");
  }

  return <button onClick={sendToParent}>Send Data</button>;
}

export default Child;
 