export function NewUrl({ ur }) {
  return (
    <div className="new-url-cont">
      <div className="full-cont">
        <a href={ur.full} target="_blank" rel="noreferrer noopener">
          {ur.full}
        </a>
      </div>
      <div className="short-cont">
        <a href={ur.short} target="_blank" rel="noreferrer noopener">
          {ur.short}
        </a>
      </div>
      <div>
        <p>clicks:{ur.clicks}</p>
      </div>
    </div>
  );
}
