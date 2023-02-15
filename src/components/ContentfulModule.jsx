import React, { Suspense } from 'react';


const TextModule = React.lazy(() => import('./TextModule'));
const QuoteModule = React.lazy(() => import('./QuoteModule'));

const RawContentfulModule = ({ module }) => {
  const { type } = module;
  let value;
  switch (type) {
    case 'ContentfulQuoteModule':
      value = <QuoteModule {...module} />;
      break;
    case 'ContentfulTextModule':
      value = <TextModule {...module} />;
      break;
    default:
      value = undefined;
      break;
  }
  return (
    <Suspense fallback={"aloha!"}>
      {value}
    </Suspense>
  );
};

const ContentfulModule = React.forwardRef((props, ref) => {
  if (!props.module) {
    return null;
  }
  return (
    <div ref={ref}>
      <RawContentfulModule {...props} />
    </div>
  );
});

export default ContentfulModule;
