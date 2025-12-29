export default function Card({ image, title, description, href }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          <a className="card-link" href={href} target="_blank" rel="noopener noreferrer">Learn more</a>
        ) : null}
      </div>
    </article>
  )
}
