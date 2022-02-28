const Text = ({
  children,
  as: Tag = "p",
  splitOnNewLine = false,
  ...props
}: {
  children?: Node | Node[] | string;
  as?: string;
  splitOnNewLine?: boolean;
  [x: string]: any;
}) =>
  ((Array.isArray(children) && children) || [children])
    .reduce((prev: Node[], curr: Node | string) => {
      if (typeof curr === "string") {
        return [...prev, ...(splitOnNewLine ? curr.split("\n") : [curr])];
      } else if (Array.isArray(curr)) {
        return [...prev, ...curr];
      } else {
        return [...prev, curr];
      }
    }, [])
    .filter((a) => a)
    .map((child, i) => (
      <Tag
        key={child || i}
        {...props}
        dangerouslySetInnerHTML={{ __html: child }}
      />
    ));

export default Text;
