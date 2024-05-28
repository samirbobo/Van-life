import star from "../../images/star-48.png";

export default function Reviews() {
  return (
    <section className="reviews">
      <article className="list">
        <h3>Your reviews</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </article>
      <article className="rates">
        <div className="rate-header">
          <h3>5.0</h3>
          <img className="img-star" src={star} alt="Start" />
          <p>overall rating</p>
        </div>
        <div className="rate-value">
          <p>5 stars</p>
          <div className="bar active"></div>
          <p>100%</p>
        </div>
        <div className="rate-value">
          <p>4 stars</p>
          <div className="bar"></div>
          <p>0%</p>
        </div>
        <div className="rate-value">
          <p>3 stars</p>
          <div className="bar"></div>
          <p>0%</p>
        </div>
        <div className="rate-value">
          <p>2 stars</p>
          <div className="bar"></div>
          <p>0%</p>
        </div>
        <div className="rate-value">
          <p>1 stars</p>
          <div className="bar"></div>
          <p>0%</p>
        </div>
        <div className="rate-value">
          <p>0 stars</p>
          <div className="bar"></div>
          <p>0%</p>
        </div>
      </article>
      <article className="reviews-content">
        <h3>Reviews (2)</h3>
        <div className="content">
          <div className="stars">
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
          </div>
          <p className="review-name">
            Elliot <span> December 1, 2022</span>
          </p>
          <p className="review-value">
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </p>
          <div className="line"></div>
        </div>
        <div className="content">
          <div className="stars">
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
            <img className="img-star" src={star} alt="Start" />
          </div>
          <p className="review-name">
            Sandy <span> November 23, 2022</span>
          </p>
          <p className="review-value">
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </p>
        </div>
        <div className="line"></div>
      </article>
    </section>
  );
}
