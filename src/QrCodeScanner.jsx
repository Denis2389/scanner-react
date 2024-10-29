import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null)

    const scanHandler = (result) => {
      setScanned(result[0].rawValue);
    }

    return (
      <div>
        <p>{scanned}</p>
        <Scanner
          allowMultiple
          onScan={scanHandler}
          components={{
            audio: false,
            finder: false,
        }}
          styles={{
            container: { width: 350 },
          }}
        />
        ;
      </div>
    );
}