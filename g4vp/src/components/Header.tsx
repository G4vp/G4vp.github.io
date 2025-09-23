import './Header.css'

type HeaderProps = {
  title: string;
  subtitle: string;
}

function HeaderBlock(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">
        <span className="header-title-text">{props.title}</span>
      </div>
      <div className="header-subtitle">
        <span className="header-subtitle-text">&gt;_ {props.subtitle}</span>
      </div>
    </header>
  )
}

export default HeaderBlock


