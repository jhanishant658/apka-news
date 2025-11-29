import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { description, title, source_name, image_url, source_url } = this.props;

    return (
      <div
        className="card m-4 shadow-lg border-0 rounded-4 overflow-hidden"
        style={{ width: "20rem", background: "#f8f9fa" }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={image_url}
            className="card-img-top"
            alt="news"
            style={{ height: "180px", objectFit: "cover" }}
          />

          <span
            className="badge bg-danger"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              padding: "6px 12px",
              fontSize: "12px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            {source_name}
          </span>
        </div>

        <div className="card-body p-3">
          <h5
            className="card-title fw-bold"
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.3",
              height: "48px",
              overflow: "hidden",
            }}
          >
            {title}
          </h5>

          <p
            className="card-text text-muted"
            style={{
              fontSize: "0.9rem",
              height: "40px",
              overflow: "hidden",
            }}
          >
            {description}.
          </p>

          <a
            href={source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark w-100 rounded-pill mt-2"
            style={{ fontWeight: "600" }}
          >
            Read More 📖
          </a>
        </div>
      </div>
    );
  }
}
