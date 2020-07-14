import styles from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <>
      <header
        className={`h-16 bg-white border flex items-center fixed w-full z-50 top-0 ${styles.header}`}
      >
        <nav className="container mx-auto flex justify-between">
          <div></div>
          <span>HamComPe</span>
          <div></div>
        </nav>
      </header>
      <div className="h-16" />
    </>
  )
}
