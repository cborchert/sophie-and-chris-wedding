const Text = ({
  children,
  as: Tag = "p",
  ...props
}: {
  children?: Node | Node[] | string;
  as?: string;
}) =>
  ((Array.isArray(children) && children) || [children])
    .reduce((prev: Node[], curr: Node | string) => {
      if (typeof curr === "string") {
        return [...prev, ...curr.split("\n")];
      } else if (Array.isArray(curr)) {
        return [...prev, ...curr];
      } else {
        return [...prev, curr];
      }
    }, [])
    .map((child, i) => (
      <Tag
        key={child || i}
        {...props}
        dangerouslySetInnerHTML={{ __html: child }}
      />
    ));

export default Text;
