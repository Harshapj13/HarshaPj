import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, meta = {} }) {
  return (
    <>
      <SEO {...meta} />
      <div className="site-root">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
