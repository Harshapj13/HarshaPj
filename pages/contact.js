import Layout from '../components/Layout'

export default function Contact() {
  const meta = { title: 'Contact', description: 'Get in touch with Harsha PJ.' }

  return (
    <Layout meta={meta}>
      <section className="container">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:harshapjawesome@gmail.com">harshapjawesome@gmail.com</a></p>
        <p>Phone: 9980543219 / 8618381157</p>
        <p>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/harsha-pj-b17325114/" target="_blank" rel="noreferrer">
            linkedin.com/in/harsha-pj-b17325114
          </a>
        </p>
      </section>
    </Layout>
  )
}
