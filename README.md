# ColorGen

The ColorGen component is a React component designed for generating and managing color codes. It provides a simple user interface to input color values, preview the color, and copy the color code to the clipboard. The Alert component is also included to display notifications, such as when a color has been successfully copied.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

## Installation

#### 1. Clone the repository:

   ```
   git clone https://github.com/osamalmezouari/colorGenerator.git
   ```
#### 2. Navigate to the project directory:

```
    cd colorGenerator
```

### 3.Install dependencies:

```
npm install
```

## Usage

  The ColorGen component is designed to be used within your application to manage color codes. It features an input field for both color pickers and text input, a live preview of the color, and a button to submit and copy the color code to the clipboard. The Alert component is used to display a notification message.

  ```
  import React, { useState } from 'react';
import ColorGen from './path/to/ColorGen';
import Alert from './path/to/Alert';

function App() {
  const [alert, setAlert] = useState(false);

  const handleButtonClick = () => {
    // Logic to trigger the alert
    setAlert(true);
  };

  return (
    <div>
      <h1>Your React App</h1>
      <button onClick={handleButtonClick}>Copy Color</button>
      {alert && <Alert setAlert={setAlert} />}
      <ColorGen />
    </div>
  );
}

export default App;

  ```
## Props 
The Alert component accepts the following prop:

setAlert: A function that can be called to control the visibility of the alert. When called with true, the alert is displayed; when called with false, the alert is hidden.

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- HTML
- CSS

## Contributors

- [osamalmezouari](https://github.com/osamalmezouari)

## License

This project is licensed under the [john smilga](https://github.com/john-smilga).
