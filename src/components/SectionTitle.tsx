type sectiontitle = {
  text?: string;
};
function SectionTitle({ text }: sectiontitle) {
  return <div className="border-b border-base-300 pb-5">
    <h2 className="text-3xl font-medium tracing-wider capitalize">{text}</h2>
  </div>;
}

export default SectionTitle;
