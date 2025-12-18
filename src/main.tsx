import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Ract } from './App.tsx'
import Button, { ButtonWithouttsx } from './common/Button.tsx'
import { But } from './common/Button.tsx'
import { List } from './List.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <List />
    <App />
    <Ract />
    <Button name="Pavan Button" alias="chitti" age={26} isMale={true} hobbies={["Gaming", "Music", "Sports"]}/>
    <But />
    <ButtonWithouttsx />
  </StrictMode>,
)
