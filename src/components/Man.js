import Link from "@docusaurus/Link";
import { string } from "prop-types";
import React from "react";

export const Man = ({ to }) => {
  const [name, section] = to.split("/");

  return (
    <Link
      to={`https://man.voidlinux.org/${name}.${section}`}
    >{`${name}(${section})`}</Link>
  );
};

Man.propTypes = {
  to: string.isRequired,
};
