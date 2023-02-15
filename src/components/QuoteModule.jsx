import React, { useEffect } from 'react';

function QuoteModule({
  title,
  quote: {
    attribution,
    content: {
      raw: content,
    },
  },
}) {

  const [quote, setQuote] = React.useState(title);
  useEffect(() => {
    setQuote('hello');
  }, []);

  return (
    <>
      {quote && quote.length > 0 && <h2 className="h2 my-4">{quote}</h2> }
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="quote-text-wrapper text-center flex-grow-1 ml-md-3" key={attribution}>
            <h3 className="h3 quote mb-3">{content}</h3>
            {attribution && <div className="attribution">— {attribution}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteModule;
