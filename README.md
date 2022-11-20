
# Mono React Component library

A Mono React Component library ***( Prototype for testing purposes )***.

## Tech Stack

- React
- Storybook
- TypeScript
- RollUP

## Installation

```bash
  npm install mono-rcl
```

## Usage/Examples

```javascript
import {Button} from 'mono-rcl'

function App() {
  return <Button 
    label="click me" 
    variant="secondary" 
    onClick={(e)=>{console.log("Clicked")}} 
  />
}
```
