import Layout from '../components/Layout'

export default function Projects() {
  const meta = { title: 'Projects', description: 'Selected projects and accomplishments.' }

  return (
    <Layout meta={meta}>
      <section className="container">
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <strong>CDS MACE Application</strong> — Clinical decision-support UI using React, TypeScript
            and D3 charts.
          </li>
          <li>
            <strong>Digital Expert Application</strong> — React Native Windows training app for hospital
            operators with course booking and remote connectivity.
          </li>
          <li>
            <strong>Employee Management & Survey Dashboards</strong> — SharePoint-backed tools with
            dashboards and reporting.
          </li>
        </ul>
      </section>
    </Layout>
  )
}
