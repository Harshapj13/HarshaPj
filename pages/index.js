import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Card from '../components/Card'

export default function Home() {
  const meta = {
    title: 'Home',
    description:
      'Harsha PJ — Front-End Developer (React, TypeScript). Experienced building performant, accessible web apps.'
  }

  // add canonical url and image for better sharing
  meta.url = 'https://harshapj.com/'
  meta.image = 'https://harshapj.com/images/Banner.jpg'

  const projects = [
    {
      title: 'UI Library Showcase',
      description: 'A small design system with reusable components and documentation.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
      href: '/projects'
    },
    {
      title: 'Dashboard App',
      description: 'Analytics dashboard with charts, filters and responsive layouts.',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60',
      href: '/projects'
    },
    {
      title: 'Marketing Landing',
      description: 'High-converting marketing page with animations and A/B tested CTA.',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60',
      href: '/projects'
    }
  ]

  return (
    <Layout meta={meta}>
      <Banner />

      <main>
        <section className="container hero">
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
          <h3>Selected Projects</h3>
          <div className="cards-grid">
            {projects.map((p) => (
              <Card key={p.title} title={p.title} description={p.description} image={p.image} href={p.href} />
            ))}
          </div>
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
      </main>
    </Layout>
  )
}
