import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

export const QrCodeGenerator = () => {

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const handleClick = () => {
        setResult(value)
        setValue('')
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
        setResult('')
    }
    
    return (
      <div>
        {result !== '' && <QRCodeSVG value={result} />}
        <input type="text" value={value} onChange={onChangeHandler} />
        <button type="button" onClick={handleClick}>
          Сгенерировать QR
        </button>
      </div>
    );
}