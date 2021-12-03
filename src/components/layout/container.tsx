/** @jsxImportSource @emotion/react */

const Container: React.FC<{ className?: string }> = ({
  children,
  ...props
}) => {
  return (
    <div
      css={{
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: "480px",
        margin: "0px auto",
        padding: "0 16px 70px",
        flex: 1,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
