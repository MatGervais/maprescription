import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'

const QrCode = (props) => {
  const [scan, setScan] = useState({
    result:"Pas de résultat",
    delay:"100"
  });

  function handleScan(data){
    this.setState({
      result: data,
    })
  }
  function handleError(err){
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <>
      <QrReader
          delay={scan.delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
        <p>{scan.result}</p>
    </>
  );
};

export default QrCode;