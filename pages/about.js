import Layout from '../components/Layout'

export default function About() {
  const meta = {
    title: 'About / Resume',
    description: 'Harsha PJ — detailed resume and professional experience.'
  }

  return (
    <Layout meta={meta}>
      <section className="container">
        <h2>About / Resume</h2>
        <p>
          Experienced Front-end developer with 7+ years in React, TypeScript, JavaScript, HTML5, CSS3,
          and Redux. Proficient in UI design principles, SharePoint integration, REST APIs, and Azure
          DevOps.
        </p>

        <h3>Professional Experience (highlights)</h3>
        <ul>
          <li>
            <strong>CitiusTech Healthcare</strong> — Technical Lead. Led front-end teams for clinical
            apps, built reusable component libraries, and improved test coverage.
          </li>
          <li>
            <strong>Accenture</strong> — Front-End Developer. Built employee tooling and dashboards on
            SharePoint backends.
          </li>
        </ul>

        <h3>Education</h3>
        <ul>
          <li>M.Sc. Software Engineering — Annamalai University (Dec 2022)</li>
          <li>B.Sc. — Govt Science College, Bangalore (May 2019)</li>
        </ul>
      </section>
    </Layout>
  )
}
