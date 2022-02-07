import "./FormLine.scss";

const FormLine = ({ id, children }: { id?: string; children?: Node }) => (
  <div id={id} className="FormLine">
    {children}
  </div>
);

export default FormLine;
