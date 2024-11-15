import "./Header.css"
import Navigation from "./Navigation"

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Mark Hobbs</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  )
}