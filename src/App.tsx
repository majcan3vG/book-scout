import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from './components/icons/SearchIcon'

function App() {
  return (
    <div className="flex flex-row items-center justify-center min-h-svh">
      <div className="flex w-full max-w-small space-x-2 items-center">
        <SearchIcon />
        <Input className="w-100" type="search" placeholder="Search" />
      </div>
      <Button>Click me</Button>
    </div>
  )
}

export default App