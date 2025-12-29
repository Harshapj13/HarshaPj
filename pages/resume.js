import Layout from '../components/Layout'

export default function Resume() {
  const meta = { title: 'Resume', description: 'Harsha PJ — Front End Developer (React JS) CV' }
  meta.url = 'https://harshapj.com/resume'
  meta.image = 'https://harshapj.com/images/Banner.jpg'

  return (
    <Layout meta={meta}>
      <main className="container resume">
        <header className="resume-header">
          <h1>Harsha PJ</h1>
          <p className="muted">Front End Developer [React JS]</p>
          <div className="contact">
            <div>Phone: 9980543219 / 8618381157</div>
            <div>Email: harshapjawesome@gmail.com</div>
            <div>LinkedIn: <a href="https://linkedin.com/in/harsha-pj-b17325114/" target="_blank" rel="noopener noreferrer">linkedin.com/in/harsha-pj-b17325114/</a></div>
          </div>
        </header>

        <section>
          <h2>Professional Summary</h2>
          <p>
            Experienced Front-end developer with over 8+ years in the tech industry, adept at crafting,
            deploying, and optimizing top-tier web applications utilizing React JS, JavaScript, TypeScript,
            HTML5, CSS3, and Redux. Proficient in UI design principles, with a knack for creating engaging
            user experiences. Possessing strong problem-solving abilities and analytical skills, I thrive in
            dynamic environments that offer opportunities for skill enhancement and professional growth.
          </p>
          <p>
            My expertise extends to SharePoint, AJAX, REST API integration, jQuery, Azure DevOps, and Git for
            version control. I'm well-versed in Bootstrap for responsive design, proficient in Photoshop for
            graphic editing, and familiar with Material-UI (MUI) for enhanced UI components. Additionally, I
            have a foundational understanding of MS SQL and MongoDB for database management.
          </p>
        </section>

        <section>
          <h2>Relevant Skills</h2>
          <ul className="skills-list">
            <li>React JS, JavaScript (ES6+), TypeScript, React Native</li>
            <li>HTML5, CSS3, Bootstrap, Material-UI (MUI)</li>
            <li>Redux, Saga, AJAX, REST API, jQuery</li>
            <li>SharePoint, Azure DevOps, Git</li>
            <li>Photoshop, Figma, Adobe Premiere Pro (basic)</li>
            <li>MS SQL (basic), MongoDB (basic)</li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <ol className="experience">
            <li>
              <strong>Technical Lead — CitiusTech Healthcare</strong> (Nov 2022 - Present)
              <div className="exp-details">
                <strong>CDS MACE APPLICATION</strong> — Dec 2022–July 2023
                <p>
                  React JS, TypeScript, JavaScript, Redux, Storybook, Rollup, HTML, CSS, Azure DevOps,
                  Jest, D3 Charts. Collaborated with stakeholders, implemented responsive designs, conducted
                  code reviews, integrated analytics, mentored junior developers, and followed Agile practices.
                </p>
                <strong>Digital Expert Application</strong> — July 2023–Present
                <p>
                  React Native (Windows), React, TypeScript, Redux, Saga. Built a training and enterprise
                  course platform for healthcare operators with connectivity tools and VNC integration.
                </p>
              </div>
            </li>

            <li>
              <strong>Front-End Developer — Accenture</strong> (May 2020 – Nov 2022)
              <div className="exp-details">
                <strong>Employee Management Tool</strong> — May 2020–March 2022
                <p>
                  React, JavaScript, HTML, CSS. Built web tools, worked in Agile teams, created reusable
                  components, validated UI/UX feasibility and optimized performance.
                </p>
                <strong>Survey Forms and Dashboards</strong>
                <p>
                  Built surveys and analytics dashboards, designed SharePoint-backed data models, and
                  implemented graphs and stored procedures.
                </p>
              </div>
            </li>

            <li>
              <strong>Web Developer — Indegene</strong> (Aug 2019 – May 2020)
              <div className="exp-details">I-details, RTE (web email development). Worked with Veeva Sandbox and
                converted PSDs into responsive HTML/CSS, using JavaScript/jQuery and Bootstrap.</div>
            </li>

            <li>
              <strong>Web Developer — Chegus Infotech</strong> (Dec 2017 – May 2019)
              <div className="exp-details">Built insurance and presentation solutions using JavaScript, jQuery,
                Bootstrap, and backend integrations.</div>
            </li>

            <li>
              <strong>Web Designer — Hearts Media</strong> (Jul 2016 – Oct 2017)
              <div className="exp-details">Created dynamic content management sites using Joomla, HTML, CSS,
                and jQuery.</div>
            </li>
          </ol>
        </section>

        <section>
          <h2>Achievements</h2>
          <ul>
            <li>Design Freak award from the client in Chegus Infotech.</li>
            <li>Quarterly Best Performer of Company in Accenture.</li>
            <li>Multiple appreciation mails from clients at Accenture.</li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            <li>Bachelor of Science — Govt Science College, Bangalore University (May 2019)</li>
            <li>Master of Science (Software Engineering) — Annamalai University (Distance education)</li>
          </ul>
        </section>

        <section>
          <h2>Personal Details</h2>
          <p>
            Name: Harsha PJ<br />
            Mobile: 9980543219 / 8618381157<br />
            Email: harshapjawesome@gmail.com<br />
            Date of Birth: 13th March 1995<br />
            Father’s name: Jagadish Rao P<br />
            Marital Status: Single<br />
            Permanent Address: #54 2nd cross, Andra Muniyappa Layout, Chelekare, Kalyan Nagar,
            Bengaluru, Karnataka 560043
          </p>
        </section>

        <section className="declaration">
          <h2>Declaration</h2>
          <p>
            “When all are not enough, I will fill the space by faith & confidence”. The above mentioned are true to the
            best of my knowledge and belief. I am liable to disqualify if any information given is found to be
            incorrect or false.
          </p>
        </section>
      </main>
    </Layout>
  )
}
