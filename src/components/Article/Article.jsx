// Prop -> Property -> Object {}

function Article({ title, author, isFree = true, img, price, id, onRemove }) {
  // props.title = "Title Test"; ❌

  const showTitle = (id) => {
    alert(`عنوان مربوط به ${title}`);
    console.log(id);
  };

  return (
    <article className="article-card">
      <header>
        <img src={img} alt="Article Img" />
      </header>
      <main className="article-body">
        <h4
          className="article-title"
          onClick={() => onRemove(id)}
        >
          {title}
        </h4>
        <p className="article-caption">
          در این مقاله، به‌صورت گام‌به‌گام یاد می‌گیرید چطور یک پروژه ساده اما
          حرفه‌ای با پایتون بسازید که رزومه برنامه‌نویسی‌تون رو تقویت کنه. از
          ایده‌پردازی تا کدنویسی و نکات کلیدی برای ارائه پروژه، همه‌چیز رو با
          زبانی ساده و مثال‌های عملی پوشش دادیم!
        </p>
      </main>
      <div className="divider"></div>
      <footer className="article-footer flex justify-between">
        <div>
          <div className="author-label flex items-center gap-1">
            <i className="fa-solid fa-user"></i>
            <span> نویسنده: </span>
            {/* conditional components with or */}
            <span className="author-name">{author || "تیم سبزلرن"}</span>
          </div>
        </div>
        <div>
          <div className="published-date flex items-center gap-2">
            <i className="fa-solid fa-calendar"></i>
            <span>
              {/* conditional components with ternary */}{" "}
              {price ? `${price?.toLocaleString()} تومان ` : "رایگان"}{" "}
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default Article;
