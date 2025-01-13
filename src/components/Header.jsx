export default function Header() {
  return (
    <header>
      <img className="header--logo" src="src/assets/react.svg" alt="react logo" />
      <nav className="header--nav">
        <ul className="header--nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}