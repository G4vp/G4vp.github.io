import './Header.css'

type HeaderProps = {
  title: string;
  subtitle: string;
}

function HeaderBlock(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">
        <text className="header-title-text">{props.title}</text>
      </div>
      <div className="header-subtitle">
        <text className="header-subtitle-text">&gt;_ {props.subtitle}</text>
      </div>
    </header>
  )
}

export default HeaderBlock


