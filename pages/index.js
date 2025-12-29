import Layout from '../components/Layout'

export default function Home() {
  const meta = {
    title: 'Home',
    description:
      'Harsha PJ — Front-End Developer (React, TypeScript). Experienced building performant, accessible web apps.'
  }

  return (
    <Layout meta={meta}>
      <section className="hero container">
        <h2>Hi, I’m Harsha PJ</h2>
        <p className="lead">
          Front-End Developer with 7+ years of experience building web and desktop UIs using React,
          TypeScript, JavaScript, HTML5, CSS3 and Redux. I design and ship performant, accessible,
          and maintainable front-ends.
        </p>
      </section>

      <section className="container">
        <h3>Core Skills</h3>
        <ul className="skills">
          <li>React • TypeScript • JavaScript (ES6+)</li>
          <li>Redux • Redux-Saga • React Native</li>
          <li>HTML5 • CSS3 • Bootstrap • MUI</li>
          <li>Azure DevOps • Git • Storybook • Jest</li>
        </ul>
      </section>

      <section className="container">
        <h3>Experience Snapshot</h3>
        <ul>
          <li>
            <strong>Technical Lead — CitiusTech Healthcare</strong> (Nov 2022 – Present)
          </li>
          <li>
            <strong>Front-End Developer — Accenture</strong> (May 2020 – Nov 2022)
          </li>
          <li>
            <strong>Web Developer — Indegene / Chegus / Hearts Media</strong> (2016 – 2020)
          </li>
        </ul>
      </section>
    </Layout>
  )
}
