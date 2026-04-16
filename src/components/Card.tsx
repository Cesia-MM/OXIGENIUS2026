interface CardBodyProps {
  title: string;
  subtitle: string;
  text: string;
}

export function CardBody({ title, subtitle, text }: CardBodyProps) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card border-0" style={{ width: "350px" }}>
        <div className="card-body text-center">

          <h1>
            {title}
            <br />
            <small className="text-body-secondary">
              {subtitle}
            </small>
          </h1>

          <p className="card-text mt-3">
            {text}
          </p>

        </div>
      </div>
    </div>
  );
}